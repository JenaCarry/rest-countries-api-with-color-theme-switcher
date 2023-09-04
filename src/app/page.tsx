"use client";

import { Countries } from "@/components/Countries";
import { Form } from "@/components/Form";
import { CountriesProps } from "@/types";
import { getAllCountries } from "@/utils/handleApi";
import { useEffect, useState } from "react";

export default function Home() {
  const [search, setSearch] = useState<string>("");
  const [filter, setFilter] = useState<string>("Filter by Region");
  const [show, setShow] = useState<boolean>(false);
  const [countries, setCountries] = useState<CountriesProps[]>([]);

  useEffect(() => {
    getAllCountries(setCountries, setShow);
  }, []);

  return (
    <main className="max-[375px]:px-3 px-8">
      <Form
        filter={filter}
        setFilter={setFilter}
        search={search}
        setSearch={setSearch}
      />
      {show && (
        <ul className="grid grid-cols-[minmax(300px,_360px)] sm:grid-cols-[repeat(2,_minmax(300px,_320px))] lg:sm:grid-cols-[repeat(3,_minmax(300px,_320px))] min-[1440px]:grid-cols-[repeat(4,_minmax(300px,_320px))] justify-center gap-8 md:gap-10 mt-16 pb-12">
          {countries
            .filter((country) =>
              country.name.common.toLowerCase().startsWith(search.toLowerCase())
            )
            .filter((country) =>
              filter !== "Filter by Region" && filter !== "All"
                ? country.region === filter
                : country
            )
            .map((country) => (
              <Countries
                key={country.name.common}
                name={country.name.common}
                population={country.population}
                region={country.region}
                capital={country.capital}
                flags={country.flags.png}
              />
            ))}
        </ul>
      )}
    </main>
  );
}
