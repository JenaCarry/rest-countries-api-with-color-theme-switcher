import Link from "next/link";
import { ThemeButton } from "./ThemeButton";

export function Header() {
  return (
    <header className="flex items-center justify-between bg-elements shadow-md text-base md:text-lg max-[375px]:px-3 px-8 py-9">
      <h2 className="font-extrabold md:text-2xl">
        <Link href="/">Where in the world?</Link>
      </h2>
      <ThemeButton />
    </header>
  );
}
