"use client";
import useDarkMode from "@/hooks/use-dark-mode";
import { Moon, Sun } from "lucide-react";
import Button from "./button";

export default function DarkModeToggle() {
  const { theme, toggleTheme } = useDarkMode();

  if (!theme) return null;

  return (
    <Button
      onClick={toggleTheme}
      variant="ghost2" 
      size='sm'
      className="rounded px-3 py-1 text-sm"
    >
      {theme === "dark" ? <Sun /> : <Moon />}
    </Button>
  );
}
