import NextAuth, { DefaultUser } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      role?: "student" | "teacher"; // Use 'role?' to mark it as optional
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    role?: "student" | "teacher"; // Use 'role?' to mark it as optional
  }
}
