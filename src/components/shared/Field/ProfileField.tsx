import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ProfileButton from "../Button/ProfileButton";
import SignOutButton from "../Button/SignOutButton";

const ProfileField = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <ProfileButton />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="relative right-5">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer" asChild>
          <button
            onClick={() => console.log("Sign Out")}
            type="button"
            className="w-full"
          >
            <p className="text-red-500">Sign Out</p>
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileField;
