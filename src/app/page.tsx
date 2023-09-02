"use client";

import { Countries } from "@/components/Countries";
import { Form } from "@/components/Form";
import { CountriesProps } from "@/types";
import { getAllCountries } from "@/utils/handleApi";
import { useEffect, useState } from "react";

export default function Home() {
  const [selected, setSelected] = useState<string>("Filter by Region");
  const [countries, setCountries] = useState<CountriesProps[]>([]);

  useEffect(() => {
    getAllCountries(setCountries);
  }, []);

  return (
    <main className="max-[375px]:px-3 px-8">
      <Form selected={selected} setSelected={setSelected} />
      <ul className="grid grid-cols-3 gap-4">
        {countries.map((country) => (
          <Countries
            key={country.name.common}
            name={country.name.common}
            population={country.population}
            region={country.region}
            capital={country.capital}
            numericCode={country.numericCode}
            flags={country.flags.png}
          />
        ))}
      </ul>
    </main>
  );
}

// {countries.map((country) => (
//   <Countries
//     name={country.name.common}
//     population={country.population}
//     region={country.region}
//     capital={country.capital}
//     numericCode={country.numericCode}
//     flags={country.flags.png}
//   />
// ))}
