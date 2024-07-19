import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const TeacherSignInButton = () => {
  return (
    <Button asChild>
      <Link href="/signin/teacher" type="submit">
        Signin as Teacher
      </Link>
    </Button>
  );
};

export default TeacherSignInButton;
