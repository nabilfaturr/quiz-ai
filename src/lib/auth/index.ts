import NextAuth from "next-auth";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { db } from "../db";
import { TeacherAuthFormSchema } from "../zod/schema";
import bcryptjs from "bcryptjs";
import { teachers } from "../db/schema";
import { eq } from "drizzle-orm";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: DrizzleAdapter(db),
  providers: [
    Google,
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        // Server side validation
        const validatedCredentials =
          TeacherAuthFormSchema.safeParse(credentials);

        if (!validatedCredentials.success) {
          throw new Error("Invalid input");
        }

        // Check existing user
        const existingUser = await db
          .select()
          .from(teachers)
          .where(eq(teachers.email, validatedCredentials.data.email))
          .limit(1);

        if (!existingUser[0]) {
          throw new Error("Invalid email or password");
        }

        if (
          !bcryptjs.compareSync(
            validatedCredentials.data.password,
            existingUser[0].password
          )
        ) {
          throw new Error("Invalid email or password");
        }

        return {
          email: existingUser[0].email,
          name: existingUser[0].name,
          image: existingUser[0].image,
          role: "teacher",
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      if (user) {
        token.role =
          user.role || (account?.provider === "google" ? "student" : undefined);
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.role = token.role;
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
});
