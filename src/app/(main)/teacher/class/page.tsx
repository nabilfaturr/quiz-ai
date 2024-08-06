
import { NoClassFoundCard } from "@/components/shared/Card/ClassCard";
import SearchClassField from "@/components/shared/Field/SearchClassField";
import Link from "next/link";
import React from "react";

const ClassPage = () => {
  return (
    <div className="space-y-5">
        <div className="flex w-full gap-2">
            <SearchClassField/>
            <Link href={"/teacher/class/create"} className="px-4 py-2 bg-green-600 rounded text-white font-medium whitespace-nowrap">Create Class</Link>
        </div>
        <div>
            <NoClassFoundCard/>
        </div>
  </div>
  )
};

export default ClassPage;
