"use client";

import { CountriesProps } from "@/types";
import { getCountry } from "@/utils/handleApi";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

interface HomeProps {
  params: {
    name: string;
  };
}

export default function Home({ params }: HomeProps) {
  const [country, setCountry] = useState<CountriesProps[]>([]);
  const name = decodeURIComponent(params.name);

  useEffect(() => {
    getCountry(name, setCountry);
  }, []);

  return (
    <main>
      <h2 className="sr-only">Country: {name}</h2>
      <Link
        href="/"
        className="w-40 text-base bg-elements flex items-center justify-center gap-2.5 py-3.5 rounded-md shadow-lg hover:bg-elements-hover"
      >
        <FaArrowLeft />
        Back
      </Link>
      {country.map((item) => (
        <section
          key={item.numericCode}
          className="flex flex-col gap-6 mt-14 pb-12 max-w-md mx-auto"
        >
          <div>
            <img
              src={item.flags.png}
              alt={item.name}
              className="w-full shadow-md rounded-sm"
            />
          </div>
          <h3 className="text-xl font-extrabold my-2">{item.name}</h3>
          <ul className="flex flex-col gap-2.5">
            <li>
              <h4>
                <span>Native Name: </span>
                {item.nativeName}
              </h4>
            </li>
            <li>
              <h4>
                <span>Population: </span>
                {item.population}
              </h4>
            </li>
            <li>
              <h4>
                <span>Region: </span>
                {item.region}
              </h4>
            </li>
            <li>
              <h4>
                <span>Sub Region: </span>
                {item.subregion}
              </h4>
            </li>
            {item.capital && (
              <li>
                <h4>
                  <span>Capital: </span>
                  {item.capital}
                </h4>
              </li>
            )}
          </ul>

          <ul className="flex flex-col gap-2.5">
            <li>
              <h4>
                <span>Top Level Domain: </span>
                {item.topLevelDomain.map(
                  (tld, index) =>
                    `${tld}${
                      item.topLevelDomain.length - 1 !== index ? ", " : ""
                    }`
                )}
              </h4>
            </li>
            {item.currencies && (
              <li>
                <h4>
                  <span>Currencies: </span>
                  {item.currencies.map(
                    (currency, index) =>
                      `${currency.code}${
                        item.currencies.length - 1 !== index ? ", " : ""
                      }`
                  )}
                </h4>
              </li>
            )}
            <li>
              <h4>
                <span>Languages: </span>
                {item.languages.map(
                  (language, index) =>
                    `${language.name}${
                      item.languages.length - 1 !== index ? ", " : ""
                    }`
                )}
              </h4>
            </li>
          </ul>
        </section>
      ))}
    </main>
  );
}
