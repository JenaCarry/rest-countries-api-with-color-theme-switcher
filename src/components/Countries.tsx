import { CountryProps } from "@/types";
import Link from "next/link";

export function Countries({
  name,
  population,
  region,
  capital,
  flags,
}: CountryProps) {
  return (
    <>
      <li className="bg-elements shadow-md rounded-lg overflow-hidden cursor-pointer customTransition hover:scale-105 hover:opacity-90">
        <Link href={`country/${name}`} className="block">
          <div className="w-full h-48">
            <img
              className="w-full h-full shadow-md object-cover"
              src={flags.png}
              alt={flags.alt ? flags.alt : name}
            />
          </div>
          <ul className="px-8 py-6 space-y-2.5">
            <li>
              <h2 className="text-xl font-extrabold pb-1.5">{name}</h2>
            </li>
            <li>
              <span>Population: </span>
              {population}
            </li>
            <li>
              <span>Region: </span>
              {region ? region : "none"}
            </li>
            <li>
              <span>Capital: </span>
              {capital ? capital : "none"}
            </li>
          </ul>
        </Link>
      </li>
    </>
  );
}
