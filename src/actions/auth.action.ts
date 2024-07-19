"use server";
import bcryptjs from "bcryptjs";
import {
  TTeacherAuthFormSchema,
  TeacherAuthFormSchema,
} from "@/lib/zod/schema";
import { db } from "@/lib/db";
import { teachers } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

export const teacherSignInAction = async (values: TTeacherAuthFormSchema) => {
  "use server";
  console.log(values);

  //

  return true;
};

export const teacherSignUpAction = async (values: TTeacherAuthFormSchema) => {
  "use server";
  try {

    // server side validation
    const result = TeacherAuthFormSchema.safeParse({
      email: values.email,
      password: values.password,
    });

    if (!result.success) {
      return {
        success: false,
        status: 400,
        message: "Invalid input",
        errors: result.error.errors,
      };
    }

    // check existing user
    const existingUser = await db
      .select()
      .from(teachers)
      .where(eq(teachers.email, result.data.email))
      .limit(1)

    if (existingUser[0]) {
      return {
        success: false,
        status: 400,
        message: "User already exists",
        errors: [{ field: "email", message: "User already exists" }],
      };
    }

    // hash the password
    const hashedPassword = await bcryptjs.hash(result.data.password, 10);
    const newUser = {
      email: result.data.email,
      password: hashedPassword,
      name: null, // Add default values for other fields
      image: null,
      emailVerified: null,
    };

    // store to the db
    await db.insert(teachers).values(newUser);

    return {
      success: true,
      status: 200,
      message: "User created successfully",
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      status: 500,
      message: "Internal server error",
    };
  }
};
