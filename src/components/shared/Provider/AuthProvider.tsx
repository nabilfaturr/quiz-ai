import { auth } from "@/lib/auth";
import React from "react";
import { redirect } from "next/navigation";

type AuthProviderProps = {
  children: React.ReactNode;
  protectedRoute: "teacher" | "student";
};

const AuthProvider: React.FC<AuthProviderProps> = async ({ children, protectedRoute }) => {
  const session = await auth();
  const role = session?.user?.role;

  if (protectedRoute === "teacher") {
    if (!session) {
      redirect("/signin/teacher");
    }

    if (role !== "teacher") {
      redirect("/unauthorized");
    }
  }

  if (protectedRoute === "student") {
    if (!session) {
      redirect("/signin/student");
    }

    if (role !== "student") {
      redirect("/unauthorized");
    }
  }

  return <>{children}</>;
};

export default AuthProvider;
