import { z } from "zod";

export type TTeacherAuthFormSchema = z.infer<typeof TeacherAuthFormSchema>;
export const TeacherAuthFormSchema = z.object({
  email: z.string().min(2).max(50).email(),

  password: z.string().min(8).max(20),
});
