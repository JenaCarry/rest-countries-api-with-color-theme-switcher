"use client";

import { CountriesProps, CurrenciesType } from "@/types";
import { getCurrencies, getFullCountryName } from "@/utils/handleApi";
import Link from "next/link";
import { useEffect, useState } from "react";

interface InfoCountryProps {
  name: string;
  population: number;
  nativeName: string;
  region: string;
  subregion: string;
  capital?: string[];
  tld: string[];
  currencies?: CurrenciesType;
  languages: string[];
  borders?: string[];
  flags: {
    png: string;
    alt: string;
  };
}
export function InfoCountry({
  name,
  population,
  nativeName,
  region,
  subregion,
  capital,
  tld,
  currencies,
  languages,
  borders,
  flags,
}: InfoCountryProps) {
  const [neighbors, setNeighbors] = useState<CountriesProps[]>([]);

  useEffect(() => {
    if (borders) {
      getFullCountryName(borders, setNeighbors);
    }
  }, []);

  return (
    <section className="flex flex-col gap-6 mt-14 pb-12 max-w-md mx-auto">
      <div>
        <img
          src={flags.png}
          alt={flags.alt}
          className="w-full shadow-md rounded-sm"
        />
      </div>
      <h3 className="text-xl font-extrabold my-2">{name}</h3>
      <ul className="flex flex-col gap-2.5">
        <li>
          <h4>
            <span>Native Name: </span>
            {nativeName}
          </h4>
        </li>
        <li>
          <h4>
            <span>Population: </span>
            {population}
          </h4>
        </li>
        <li>
          <h4>
            <span>Region: </span>
            {region}
          </h4>
        </li>
        <li>
          <h4>
            <span>Sub Region: </span>
            {subregion}
          </h4>
        </li>
        {capital && (
          <li>
            <h4>
              <span>Capital: </span>
              {capital}
            </h4>
          </li>
        )}
      </ul>

      <ul className="flex flex-col gap-2.5">
        <li>
          <h4>
            <span>Top Level Domain: </span>
            {tld.join(", ")}
          </h4>
        </li>

        {currencies && (
          <li>
            <h4>
              <span>Currencies: </span>
              {getCurrencies(currencies)?.join(", ")}
            </h4>
          </li>
        )}
        <li>
          <h4>
            <span>Languages: </span>
            {Object.values(languages).join(", ")}
          </h4>
        </li>
      </ul>

      <div>
        <h4 className="text-lg font-semibold mb-5">Border Countries:</h4>
        {neighbors.length > 0 ? (
          <ul className="flex flex-wrap gap-2.5">
            {neighbors.map((item) => (
              <li key={item.name.common}>
                <Link
                  href={`/country/${item.name.common}`}
                  className="block bg-elements hover:bg-elements-hover w-max px-4 py-2 rounded-lg shadow-md cursor-pointer customTransition"
                >
                  {item.name.common}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>No border countries</p>
        )}
      </div>
    </section>
  );
}
//
