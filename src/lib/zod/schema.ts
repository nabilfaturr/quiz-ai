import { z } from "zod";

export type TTeacherAuthFormSchema = z.infer<typeof TeacherAuthFormSchema>;

export const TeacherAuthFormSchema = z.object({
  email: z.string().min(2).max(50).email(),

  password: z.string().min(8).max(20),
});

export const CreateClassFormSchema = z.object({
  name: z.string().min(2).max(50),
  subject: z.string().min(2).max(50),
  level: z.string().min(2).max(50),
  description: z.string().min(2).max(200),
  teacherId: z.string(),
})
