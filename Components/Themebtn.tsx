"use client";
import React from "react";
import { useTheme } from "next-themes";
const ThemeToggleButton = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      Toggle Theme
    </button>
  );
};

export default ThemeToggleButton;
