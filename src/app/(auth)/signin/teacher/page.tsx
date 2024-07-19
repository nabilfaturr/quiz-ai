import LoginCard from "@/components/shared/Card/LoginCard";
import React from "react";

type TeacherSignInPageProps = {};

const TeacherSignInPage: React.FC<TeacherSignInPageProps> = ({}) => {
  return <LoginCard role="teacher" />;
};

export default TeacherSignInPage;
