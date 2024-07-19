import LoginCard from "@/components/shared/Card/LoginCard";
import React from "react";

type StudentSignInPageProps = {};

const StudentSignInPage: React.FC<StudentSignInPageProps> = ({}) => {
  return <LoginCard role="student" />;
};

export default StudentSignInPage;
