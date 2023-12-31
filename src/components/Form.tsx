"use client";

import React, { useEffect, useRef, useState } from "react";
import { FaAngleDown, FaSearch } from "react-icons/fa";

interface FormProps {
  filter: string;
  setFilter: (filter: string) => void;
  search: string;
  setSearch: (search: string) => void;
  onPageChange: (page: number) => void;
}

export function Form({
  filter,
  setFilter,
  search,
  setSearch,
  onPageChange,
}: FormProps) {
  const [isActive, setIsActive] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const regions = [
    "All",
    "Africa",
    "Americas",
    "Asia",
    "Europe",
    "Oceania",
    "Antarctic",
  ];

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsActive(false);
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <form
      className="flex flex-col gap-10 sm:flex-row sm:justify-between sm:items-center sm:gap-12"
      onSubmit={handleSubmit}
    >
      <div className="relative flex items-center w-full max-w-md">
        <input
          aria-label="search country"
          type="search"
          name="search"
          id="search"
          placeholder="Search for a country"
          className="w-full text-primary-text font-semibold bg-elements py-4 shadow-md pl-12 pr-5 rounded-lg outline-none placeholder:font-light"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setFilter("Filter by Region");
          }}
        />
        <FaSearch className="absolute left-5" />
      </div>

      <div className="relative w-full max-w-[220px] space-y-4">
        <div
          className="flex items-center justify-between bg-elements py-4 shadow-md rounded-lg px-5 cursor-pointer"
          onClick={() => setIsActive(!isActive)}
          ref={dropdownRef}
        >
          <span className="text-primary-text font-light">{filter}</span>
          <FaAngleDown
            className={`text-primary-text text-base customTransition ${
              isActive && "rotate-180"
            }`}
          />
        </div>
        <ul
          className={`w-full absolute bg-elements shadow-xl rounded-lg z-10 customTransition border overflow-hidden ${
            isActive
              ? "opacity-100 max-h-screen translate-y-0"
              : "opacity-0 max-h-0 -translate-y-3"
          }`}
        >
          {regions.map((region, index) => (
            <li
              key={index}
              className={`cursor-pointer px-5 py-2 hover:bg-elements-hover hover:text-primary-text customTransition ${
                region === filter ? "bg-input-text text-white" : ""
              }`}
              onClick={() => {
                setFilter(region);
                setIsActive(false);
                onPageChange(1);
                setSearch("");
              }}
            >
              {region}
            </li>
          ))}
        </ul>
      </div>
    </form>
  );
}
