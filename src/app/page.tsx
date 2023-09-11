"use client";
import { useEffect, useState } from "react";
import { getAllCountries } from "@/utils/handleApi";
import { CountriesProps } from "@/types";
import { Form } from "@/components/Form";
import { Countries } from "@/components/Countries";
import { Pagination } from "@/components/Pagination";

export default function Home() {
  const [search, setSearch] = useState<string>("");
  const [filter, setFilter] = useState<string>("Filter by Region");
  const [countries, setCountries] = useState<CountriesProps[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 24;

  const searchFiltered =
    search.length > 0
      ? countries.filter((country) =>
          country.name.common
            .toLocaleLowerCase()
            .startsWith(search.toLocaleLowerCase())
        )
      : [];

  const dropdownFiltered = countries.filter((country) =>
    filter !== "Filter by Region" && filter !== "All"
      ? country.region === filter
      : country
  );

  useEffect(() => {
    getAllCountries(setCountries);
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = dropdownFiltered.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  console.log("Renderizou");

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <main>
      <Form
        filter={filter}
        setFilter={setFilter}
        search={search}
        setSearch={setSearch}
      />
      <ul className="grid grid-cols-[minmax(200px,_360px)] sm:grid-cols-[repeat(2,_minmax(200px,_300px))] lg:sm:grid-cols-[repeat(3,_minmax(200px,_300px))] min-[1440px]:grid-cols-[repeat(4,_minmax(200px,_300px))] justify-center gap-8 md:gap-12 lg:gap-14 mt-14 pb-12">
        {search.length > 0
          ? searchFiltered.map((item) => (
              <Countries
                key={item.name.common}
                name={item.name.common}
                population={item.population}
                region={item.region}
                capital={item.capital}
                flags={item.flags}
              />
            ))
          : currentItems.map((item) => (
              <Countries
                key={item.name.common}
                name={item.name.common}
                population={item.population}
                region={item.region}
                capital={item.capital}
                flags={item.flags}
              />
            ))}
      </ul>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={
          search.length > 0 ? searchFiltered.length : dropdownFiltered.length
        }
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
    </main>
  );
}
