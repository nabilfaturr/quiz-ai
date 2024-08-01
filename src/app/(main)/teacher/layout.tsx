import React from "react";
import AuthProvider from "@/components/shared/Provider/AuthProvider";
import Navbar from "@/components/shared/Navbar";

const TeacherLayoutPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthProvider protectedRoute="teacher">
      <div className="max-w-5xl mx-auto px-5">
        <Navbar />
        {children}
      </div>
    </AuthProvider>
  );
};

export default TeacherLayoutPage;
