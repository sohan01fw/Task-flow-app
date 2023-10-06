"use client";
import React from "react";
import { useTheme } from "next-themes";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const renderThemeChanger = () => {
    if (theme === "dark") {
      return (
        <button
          className="w-6 h-6 text-yellow-500 m-10 "
          onClick={() => setTheme("light")}
        >
          light
        </button>
      );
    } else {
      return (
        <button
          className="w-6 h-6 text-gray-900 m-10"
          onClick={() => setTheme("dark")}
        >
          Dark
        </button>
      );
    }
  };

  return <>{renderThemeChanger()}</>;
};

export default ThemeSwitcher;
