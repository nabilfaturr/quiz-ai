import { Button } from "@/components/ui/button";
import { SunIcon } from "lucide-react";
import React from "react";

const ThemeButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <Button variant="ghost" className="px-2 py-1 hover:bg-black/5">
      {children}
    </Button>
  );
};

export default ThemeButton;
