import React from "react";

type AuthLayoutProps = {
  children: React.ReactNode;
};

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="max-w-lg mx-auto h-screen flex items-center justify-center p-3">
      {children}
    </div>
  );
};

export default AuthLayout;
