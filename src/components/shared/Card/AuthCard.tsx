import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import { ChromeIcon } from "../Icon/ChromeIcon";
import { signIn } from "@/lib/auth";
import TeacherAuthForm from "../Form/TeacherAuthForm";

type LoginCardProps = {
  role?: "student" | "teacher";
  authType: "signin" | "signup";
};

const LoginCard: React.FC<LoginCardProps> = ({ role, authType }) => {
  return role === "teacher" ? (
    <TeacherLoginCard authType={authType} />
  ) : (
    <StudentLoginCard authType={authType} />
  );
};

const TeacherLoginCard = ({ authType }: LoginCardProps) => {
  return (
    <>
      <Card className="w-full max-w-[350px]">
        <CardHeader>
          <CardTitle className="text-2xl">
            {authType === "signin" ? "Login as Teacher" : "Sign Up as Teacher"}
          </CardTitle>
          <CardDescription>
            {authType === "signin"
              ? "Enter your credentials to login"
              : "Create a new account"}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <TeacherAuthForm type={authType} />
        </CardContent>
      </Card>
    </>
  );
};

const StudentLoginCard = ({ authType }: LoginCardProps) => {
  return (
    <>
      <form
        className="w-full max-w-[350px]"
        action={async () => {
          "use server";

          await signIn("google", { redirectTo: "/" });
        }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">
              {authType === "signin"
                ? "Login as Student"
                : "Sign Up as Student"}
            </CardTitle>
            <CardDescription>
              {authType === "signin"
                ? "Sign in to your account to continue"
                : "Create a new account to continue"}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <Button variant="outline" className="w-full" type="submit">
                <ChromeIcon className="mr-2 h-5 w-5" />
                {authType === "signin"
                  ? "Login with Google"
                  : "Sign Up with Google"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </form>
    </>
  );
};

export default LoginCard;
