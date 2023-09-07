"use client";

import { InfoCountry } from "@/components/InfoCountry";
import { CountriesProps } from "@/types";
import { getCountryInfo } from "@/utils/handleApi";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

interface HomeProps {
  params: {
    name: string;
  };
}

export default function Home({ params }: HomeProps) {
  const [countryInfo, setCountryInfo] = useState<CountriesProps[]>([]);
  const name = decodeURIComponent(params.name);

  useEffect(() => {
    getCountryInfo(name, setCountryInfo);
  }, []);

  return (
    <main>
      <h2 className="sr-only">Country: {name}</h2>
      <Link
        href="/"
        className="w-40 text-base bg-elements flex items-center justify-center gap-2.5 py-3.5 rounded-lg shadow-md hover:bg-elements-hover customTransition"
      >
        <FaArrowLeft />
        Back
      </Link>
      {countryInfo.map((item) => (
        <InfoCountry
          key={item.name.common}
          name={item.name.common}
          population={item.population}
          nativeName={item.name.official}
          region={item.region}
          subregion={item.subregion}
          capital={item.capital}
          tld={item.tld}
          currencies={item.currencies}
          languages={item.languages}
          borders={item.borders}
          flags={item.flags}
        />
      ))}
    </main>
  );
}
