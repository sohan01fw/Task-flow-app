"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import loadConfig from "next/dist/server/config";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <p>loading...</p>;
  }
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
