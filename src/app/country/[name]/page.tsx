"use client";

import { CountriesProps } from "@/types";
import { getCountry } from "@/utils/handleApi";
import Link from "next/link";
import { useEffect, useState } from "react";

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
      <h2>{name}</h2>
      {country.map((item) => (
        <section key={item.numericCode}>
          <Link href="/">Voltar CC</Link>
          <div>
            <img src={item.flags.png} alt={item.name} />
          </div>
          <h2>{item.name}</h2>
          <p>
            <span>Native Name: </span>
            {item.nativeName}
          </p>
          <p>
            <span>Population: </span>
            {item.population}
          </p>
          <p>
            <span>Region: </span>
            {item.region}
          </p>
          <p>
            <span>Sub Region: </span>
            {item.subregion}
          </p>
          {item.capital && (
            <p>
              <span>Capital: </span>
              {item.capital}
            </p>
          )}
          <p>
            <span>Top Level Domain: </span>
            {item.topLevelDomain.map(
              (tld, index) =>
                `${tld}${item.topLevelDomain.length - 1 !== index ? ", " : ""}`
            )}
          </p>
          {item.currencies && (
            <p>
              <span>Currencies: </span>
              {item.currencies.map(
                (currency, index) =>
                  `${currency.code}${
                    item.currencies.length - 1 !== index ? ", " : ""
                  }`
              )}
            </p>
          )}
          <p>
            <span>Languages: </span>
            {item.languages.map(
              (language, index) =>
                `${language.name}${
                  item.languages.length - 1 !== index ? ", " : ""
                }`
            )}
          </p>
        </section>
      ))}
    </main>
  );
}
