"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BsMoon } from "react-icons/bs";
import { IoSunny } from "react-icons/io5";

export function Header() {
  const [isLightTheme, seIsLightTheme] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem("theme");
    if (data !== null) seIsLightTheme(JSON.parse(data));
  }, []);

  useEffect(() => {
    const element = document.documentElement;
    localStorage.setItem("theme", JSON.stringify(isLightTheme));
    if (isLightTheme) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }, [isLightTheme]);

  return (
    <header className="flex items-center justify-between bg-elements shadow-md text-base max-[375px]:px-3 px-8 py-11">
      <h2 className="font-extrabold">
        <Link href="/">Where in the world?</Link>
      </h2>
      <button
        className="flex items-center gap-2 font-semibold"
        onClick={() => seIsLightTheme(!isLightTheme)}
      >
        {isLightTheme ? (
          <IoSunny className="text-lg font-extrabold" />
        ) : (
          <BsMoon className="text-lg font-extrabold" />
        )}
        {isLightTheme ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
}
