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
      <li>
        <img src={flags} alt={name} />
        <h2>{name}</h2>
        <p>Population: {population}</p>
        <p>Region: {region}</p>
        <p>Capital: {capital}</p>
      </li>
    </>
  );
}
