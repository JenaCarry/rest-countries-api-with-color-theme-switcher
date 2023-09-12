"use client";

import { CountriesProps, CurrenciesType, LanguagesType } from "@/types";
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
  languages?: LanguagesType;
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
    <section className="w-full flex flex-col gap-6 mt-14 pb-16 max-w-md mx-auto lg:max-w-6xl lg:flex-row lg:justify-between lg:items-center lg:gap-12">
      <div className="lg:w-1/2 lg:max-w-lg">
        <img
          src={flags.png}
          alt={flags.alt}
          className="w-full max-h-[500px] shadow-md rounded-sm"
        />
      </div>
      <div className="flex flex-col gap-6 lg:w-1/2 lg:max-w-lg">
        <h3 className="text-xl font-extrabold md:text-3xl">{name}</h3>
        <div className="flex flex-col gap-6 md:flex-row md:justify-between">
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
                {region ? region : "none"}
              </h4>
            </li>
            <li>
              <h4>
                <span>Sub Region: </span>
                {subregion ? subregion : "none"}
              </h4>
            </li>
            <li>
              <h4>
                <span>Capital: </span>
                {capital ? capital : "none"}
              </h4>
            </li>
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
                {languages
                  ? Object.values(languages).join(", ")
                  : Object.values(languages || { lang: "none" })}
              </h4>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
          <h4 className="text-lg font-semibold lg:hidden">Border Countries:</h4>
          {neighbors.length > 0 ? (
            <ul className="flex flex-wrap gap-2.5 lg:items-center">
              <li className="hidden lg:block">
                <h4 className="text-lg font-semibold">Border Countries:</h4>
              </li>
              {neighbors.map((item) => (
                <li key={item.name.common}>
                  <Link
                    href={`/country/${item.name.common}`}
                    className="block bg-elements hover:bg-elements-hover w-max px-4 py-2 rounded-lg shadow-md cursor-pointer customTransition"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    {item.name.common}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <h4>
              <span className="text-lg font-semibold">Border Country: </span> No
              border countries
            </h4>
          )}
        </div>
      </div>
    </section>
  );
}
//
