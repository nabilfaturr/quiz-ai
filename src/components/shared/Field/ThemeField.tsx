import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ThemeButton from "../Button/ThemeButton";
import { SunIcon } from "lucide-react";

const ThemeField = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="p-2 hover:bg-zinc-200 rounded">
          <SunIcon />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Light</DropdownMenuItem>
        <DropdownMenuItem>Dark</DropdownMenuItem>
        <DropdownMenuItem>System</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeField;
