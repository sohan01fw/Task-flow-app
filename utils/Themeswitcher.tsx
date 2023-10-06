"use client";
import React from "react";
import { useTheme } from "next-themes";

const ThemeSwitcher = () => {
  const { systemTheme, theme, setTheme } = useTheme();

  const renderThemeChanger = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <button
          className="w-6 h-6 text-yellow-500 "
          onClick={() => setTheme("light")}
        >
          light
        </button>
      );
    } else {
      return (
        <button
          className="w-6 h-6 text-gray-900 "
          onClick={() => setTheme("dark")}
        ></button>
      );
    }
  };

  return <>{renderThemeChanger()}</>;
};

export default ThemeSwitcher;
