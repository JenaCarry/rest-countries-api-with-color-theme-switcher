"use client";
import { useEffect, useRef, useState } from "react";
import { getAllCountries } from "@/utils/handleApi";
import { CountriesProps } from "@/types";
import { Form } from "@/components/Form";
import { Countries } from "@/components/Countries";
import { Pagination } from "@/components/Pagination";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { Loading } from "@/components/Loading";

export default function Home() {
  const [search, setSearch] = useState<string>("");
  const [filter, setFilter] = useState<string>("Filter by Region");
  const [countries, setCountries] = useState<CountriesProps[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const endPage = useRef<HTMLDivElement | null>(null);
  let itemsPerPage = 24;

  const searchFiltered =
    search.length > 0
      ? countries.filter((country) =>
          country.name.common
            .toLocaleLowerCase()
            .startsWith(search.trim().toLocaleLowerCase())
        )
      : [];

  const dropdownFiltered =
    filter !== "Filter by Region" && filter !== "All"
      ? countries.filter((country) => country.region === filter)
      : countries.map((country) => country);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = dropdownFiltered.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  useEffect(() => {
    getAllCountries(setCountries, setIsLoading);
  }, []);

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <main className="relative">
      <h1 className="sr-only">REST Countries API with color theme switcher</h1>
      <Form
        filter={filter}
        setFilter={setFilter}
        search={search}
        setSearch={setSearch}
        onPageChange={onPageChange}
      />
      {search.length > 0 && searchFiltered.length === 0 && (
        <div>
          <h2 className="text-2xl font-semibold text-center mt-20">
            Country not found...
          </h2>
        </div>
      )}
      {!isLoading ? (
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
      ) : (
        <Loading text="loading countries..." />
      )}
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={
          search.length > 0 ? searchFiltered.length : dropdownFiltered.length
        }
        currentPage={currentPage}
        onPageChange={onPageChange}
      />

      <div className="flex flex-col gap-1.5 fixed bottom-2.5 right-2.5 min-[1440px]:hidden">
        <button
          aria-label="top"
          onClick={() => window.scrollTo(0, 0)}
          className="p-2 bg-elements-hover rounded-full hover:bg-input-text hover:text-white"
        >
          <FaAngleUp />
        </button>
        <button
          aria-label="bottom"
          onClick={() => endPage.current?.scrollIntoView()}
          className="p-2 bg-elements-hover rounded-full hover:bg-input-text hover:text-white"
        >
          <FaAngleDown />
        </button>
      </div>

      <div ref={endPage} />
    </main>
  );
}
