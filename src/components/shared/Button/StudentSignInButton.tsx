import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const StudentSignInButton = () => {
  return (
    <Button asChild>
      <Link href="/signin/student" type="submit">
        Signin as Student
      </Link>
    </Button>
  );
};

export default StudentSignInButton;
