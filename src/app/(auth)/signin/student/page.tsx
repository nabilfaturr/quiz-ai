import LoginCard from "@/components/shared/Card/AuthCard";
import React from "react";

type StudentSignInPageProps = {};

const StudentSignInPage: React.FC<StudentSignInPageProps> = ({}) => {
  return <LoginCard role="student" authType="signin"/>;
};

export default StudentSignInPage;
