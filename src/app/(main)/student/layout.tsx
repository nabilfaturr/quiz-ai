import React from "react";
import AuthProvider from "@/components/shared/Provider/AuthProvider";

const TeacherLayoutPage = ({ children }: { children: React.ReactNode }) => {
  return <AuthProvider protectedRoute="student">{children}</AuthProvider>;
};

export default TeacherLayoutPage;
