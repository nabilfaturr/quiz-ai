"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
import { CreateClassFormSchema } from "@/lib/zod/schema";
import { createClassAction } from "@/actions/class.action";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

const CreateClassForm = () => {
  const form = useForm<z.infer<typeof CreateClassFormSchema>>({
    resolver: zodResolver(CreateClassFormSchema),
    defaultValues: {
      name: "",
      subject: "",
      level: "",
      description: "",
      teacherId: "",
    },
  });

  const formAction = async (rawForm: z.infer<typeof CreateClassFormSchema>) => {
    try {
      await createClassAction(rawForm);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = (values: z.infer<typeof CreateClassFormSchema>) => {
    formAction(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter class name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-2 gap-5">
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Subject</FormLabel>
                <FormControl>
                  <Input placeholder="Enter class subject" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="level"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Level</FormLabel>
                <FormControl>
                  <Input placeholder="Enter class level" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Enter class description"
                  className="h-32"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <button
          type="submit"
          className="btn-create w-full"
          onSubmit={() => alert("Submit")}
        >
          Create
        </button>
      </form>
    </Form>
  );
};

export default CreateClassForm;
