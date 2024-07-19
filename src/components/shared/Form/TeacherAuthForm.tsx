"use client";

import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  teacherSignInAction,
  teacherSignUpAction,
} from "@/actions/auth.action";
import {
  TTeacherAuthFormSchema,
  TeacherAuthFormSchema,
} from "@/lib/zod/schema";
import { toast, Toaster } from "sonner";
import { useRouter } from "next/navigation";

type TeacherAuthFormProps = {
  type: "signin" | "signup";
};

const TeacherAuthForm: React.FC<TeacherAuthFormProps> = ({ type }) => {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const router = useRouter();

  const form = useForm<TTeacherAuthFormSchema>({
    resolver: zodResolver(TeacherAuthFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const performTeacherSignIn = async (values: TTeacherAuthFormSchema) => {
    setLoading(true);
    setError(false);
    try {
      const result = await teacherSignInAction(values);
      if (!result) {
        setError(true);
      }
    } catch (e) {
      console.error(e);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const performTeacherSignUp = async (values: TTeacherAuthFormSchema) => {
    setLoading(true);
    setError(false);
    try {
      const result = await teacherSignUpAction(values);
      console.log(result);
      if (!result.success) {
        setError(true);
        toast.error(result.message);
        return;
      }

      toast.success("Account created successfully, Please login", {
        duration: 2000,
      });

      setTimeout(() => {
        router.push("/signin/teacher");
      }, 2000);

    } catch (e) {
      console.error(e);
      toast.error("Something went wrong, Please try again later");
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = (values: TTeacherAuthFormSchema) => {
    type === "signin"
      ? performTeacherSignIn(values)
      : performTeacherSignUp(values);
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-3">
            <FormField
              control={form.control}
              name="email"
              disabled={loading}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter you email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              disabled={loading}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your password"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Loading..." : type === "signin" ? "Sign In" : "Sign Up"}
          </Button>
        </form>
      </Form>
      <Toaster richColors />
    </>
  );
};

export default TeacherAuthForm;
