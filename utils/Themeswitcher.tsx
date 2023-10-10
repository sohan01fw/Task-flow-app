"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch } from "@nextui-org/react";
import { MoonIcon } from "./Moon";
import { SunIcon } from "./sun";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const switchIcons = () => {
    const selectedIcon = theme === "light" ? <SunIcon /> : <MoonIcon />;

    return (
      <Switch
        size="md"
        thumbIcon={selectedIcon}
        onChange={() => setTheme(theme === "light" ? "dark" : "light")}
      />
    );
  };

  if (!mounted) return switchIcons();

  return switchIcons();
}
