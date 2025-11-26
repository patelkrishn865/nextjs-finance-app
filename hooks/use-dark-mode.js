"use client";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";

export default function useDarkMode(defaultTheme = "dark") {
  const [cookies, setCookie] = useCookies(["theme"]);
  const [theme, setTheme] = useState(null); 

  useEffect(() => {
    const saved = cookies.theme || defaultTheme;
    setTheme(saved);
    document.documentElement.dataset.theme = saved;
  }, []);

  useEffect(() => {
    if (theme) {
      document.documentElement.dataset.theme = theme;
      setCookie("theme", theme, { path: "/", maxAge: 31536000 });
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return { theme, toggleTheme };
}
