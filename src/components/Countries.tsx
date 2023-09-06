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
          <div className="w-full h-52">
            <img
              className="w-full h-full"
              src={flags}
              alt={name}
              loading="lazy"
            />
          </div>
          <div className="px-8 py-6 space-y-3">
            <h2 className="text-base font-extrabold pb-1.5">{name}</h2>
            <p>
              <span>Population: </span>
              {population}
            </p>
            <p>
              <span>Region: </span>
              {region}
            </p>
            {capital && (
              <p>
                <span>Capital: </span>
                {capital}
              </p>
            )}
          </div>
        </Link>
      </li>
    </>
  );
}
