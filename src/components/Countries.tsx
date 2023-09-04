import { CountryProps } from "@/types";

export function Countries({
  name,
  population,
  region,
  capital,
  numericCode,
  flags,
}: CountryProps) {
  return (
    <>
      <li className="bg-elements shadow-md rounded-lg overflow-hidden">
        <div className="w-full h-52">
          <img className="w-full h-full" src={flags} alt={name} loading="lazy" />
        </div>
        <div className="px-8 py-6 space-y-3">
          <h2 className="text-base font-extrabold pb-1.5">{name}</h2>
          <p>
            <span className="font-semibold">Population:</span> {population}
          </p>
          <p>
            <span className="font-semibold">Region:</span> {region}
          </p>
          <p>
            <span className="font-semibold">Capital:</span> {capital}
          </p>
        </div>
      </li>
    </>
  );
}
