import React from "react";
import AuthProvider from "@/components/shared/Provider/AuthProvider";
import Navbar from "@/components/shared/Navbar";

const TeacherLayoutPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthProvider protectedRoute="teacher">
        <Navbar />
      <div className="max-w-5xl mx-auto py-5">
        {children}
      </div>
    </AuthProvider>
  );
};

export default TeacherLayoutPage;
