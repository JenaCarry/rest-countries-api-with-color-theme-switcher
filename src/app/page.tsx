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
    <main>
      <Form
        filter={filter}
        setFilter={setFilter}
        search={search}
        setSearch={setSearch}
      />
      {show && (
        <ul className="grid grid-cols-[minmax(200px,_360px)] sm:grid-cols-[repeat(2,_minmax(200px,_300px))] lg:sm:grid-cols-[repeat(3,_minmax(200px,_300px))] min-[1440px]:grid-cols-[repeat(4,_minmax(200px,_300px))] justify-center gap-8 md:gap-12 lg:gap-14 mt-14 pb-12">
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
                flags={country.flags}
              />
            ))}
        </ul>
      )}
    </main>
  );
}
