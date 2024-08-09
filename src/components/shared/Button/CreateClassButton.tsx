import { PlusCircleIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const CreateClassButton = () => {
  return (
    <Link
      href={"/teacher/class/create"}
      className="px-4 py-2 bg-green-600 rounded text-white font-medium whitespace-nowrap"
    >
      Create Class
    </Link>
  );
};

export default CreateClassButton;
