"use client";

import { BsMoon } from "react-icons/bs";
import { IoSunny } from "react-icons/io5";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeButton() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      className="flex items-center gap-2 font-semibold"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {resolvedTheme === "dark" ? (
        <IoSunny className="text-lg font-extrabold" />
      ) : (
        <BsMoon className="text-lg font-extrabold" />
      )}
      {resolvedTheme === "dark" ? "Dark Mode" : "Light Mode"}
    </button>
  );
}
