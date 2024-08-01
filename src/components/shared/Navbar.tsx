"use client";
import React from "react";
import MainLogo from "./Icon/Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ProfileField from "./Field/ProfileField";
import ThemeField from "./Field/ThemeField";

const links = [
  {
    name: "Dashboard",
    href: "/teacher/dashboard",
  },
  {
    name: "Class",
    href: "/teacher/class",
  },
];

const Navbar = () => {
  return (
    <div className="py-3 flex items-center justify-between">
      <div className="flex items-center gap-20">
        <MainLogo />
        <NavItems />
      </div>
      <div className="flex items-center gap-3">
        <ThemeField />
        <ProfileField />
      </div>
    </div>
  );
};

export const NavItems = () => {
  const currentPath = usePathname();

  return (
    <div className="flex items-center gap-8">
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={`${
            currentPath === link.href
              ? "text-black underline"
              : "text-slate-600"
          } hover:text-black`}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
