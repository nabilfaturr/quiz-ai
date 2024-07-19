import LoginCard from "@/components/shared/Card/AuthCard";
import React from "react";

type TeacherSignInPageProps = {};

const TeacherSignInPage: React.FC<TeacherSignInPageProps> = ({}) => {
  return <LoginCard role="teacher" authType="signin"/>;
};

export default TeacherSignInPage;
