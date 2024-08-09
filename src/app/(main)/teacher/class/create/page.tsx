import CreateClassForm from "@/components/shared/Form/CreateClassForm";
import { ArrowLeftCircleIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const CreateClassPage = () => {
  return (
    <div className="w-screen h-screen bg-white absolute top-0 left-0">
      <div className="max-w-5xl h-full mx-auto flex-shrink-0 flex flex-col justify-center gap-3">
        <div className="flex items-center gap-3">
          <Link href="/teacher/class">
            <ArrowLeftCircleIcon size={32} className="text-black/60 hover:text-black"/>
          </Link>
          <h1 className="heading-1">Create Class</h1>
        </div>
        <div className="border p-5 rounded-lg bg-blue-50">
          <CreateClassForm />
        </div>
      </div>
    </div>
  );
};

export default CreateClassPage;
