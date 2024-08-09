import CreateClassButton from "@/components/shared/Button/CreateClassButton";
import { NoClassFoundCard } from "@/components/shared/Card/ClassCard";
import SearchClassField from "@/components/shared/Field/SearchClassField";
import Link from "next/link";
import React from "react";

const ClassPage = () => {
  return (
    <div className="space-y-5">
      <div className="flex w-full gap-2">
        <SearchClassField />
        <CreateClassButton/>
      </div>
      <div>
        <NoClassFoundCard />
      </div>
    </div>
  );
};

export default ClassPage;
