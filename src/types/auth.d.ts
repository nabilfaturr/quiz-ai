import NextAuth, { DefaultUser } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      role?: string; // Use 'role?' to mark it as optional
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    role?: string; // Use 'role?' to mark it as optional
  }
}
