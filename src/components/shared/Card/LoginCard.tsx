import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import { ChromeIcon } from "../Icon/ChromeIcon";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { signIn, signOut } from "@/lib/auth";

type LoginCardProps = {
  role: "student" | "teacher";
};

const LoginCard: React.FC<LoginCardProps> = ({ role }) => {
  return role === "teacher" ? <TeacherLoginCard /> : <StudentLoginCard />;
};

const TeacherLoginCard = () => {
  return (
    <>
      <Card className="w-full max-w-[350px]">
        <CardHeader>
          <CardTitle className="text-2xl">Login as Teacher</CardTitle>
          <CardDescription>
            Enter your credentials to access your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Enter your email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Sign In</Button>
        </CardFooter>
      </Card>
    </>
  );
};

const StudentLoginCard = () => {
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
            <CardTitle className="text-2xl">Login as Student</CardTitle>
            <CardDescription>
              Sign in to your account to continue
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <Button variant="outline" className="w-full" type="submit">
                <ChromeIcon className="mr-2 h-5 w-5" />
                Sign in with Google
              </Button>
            </div>
          </CardContent>
        </Card>
      </form>
    </>
  );
};

export default LoginCard;
