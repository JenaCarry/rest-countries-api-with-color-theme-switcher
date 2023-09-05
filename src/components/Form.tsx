"use client";

import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

interface FormProps {
  filter: string;
  setFilter: (filter: string) => void;
  search: string;
  setSearch: (search: string) => void;
}

export function Form({ filter, setFilter, search, setSearch }: FormProps) {
  const [isActive, setIsActive] = useState(false);
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

  return (
    <form className="space-y-12" onSubmit={handleSubmit}>
      <div className="relative flex items-center">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search for a country"
          className="w-full text-input-text bg-elements py-4 shadow-md pl-12 pr-5 rounded-lg outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <FaSearch className="absolute left-5" />
      </div>

      <div className="relative font-semibold w-64 min-[481px]:w-80 space-y-4">
        <div
          className="flex items-center justify-between bg-elements py-4 shadow-md rounded-lg px-5 cursor-pointer"
          onClick={() => setIsActive(!isActive)}
        >
          <span className="text-primary-text">{filter}</span>
          <FaAngleDown
            className={`text-primary-text text-base transition-all duration-200 ease-in-out ${
              isActive && "rotate-180"
            }`}
          />
        </div>
        <ul
          className={`w-full absolute bg-elements shadow-xl rounded-lg z-10 overflow-hidden transition-all duration-200 ease-in-out ${
            isActive
              ? "opacity-100 translate-y-0 visible"
              : "opacity-0 -translate-y-1 invisible"
          }`}
        >
          {regions.map((region, index) => (
            <li
              key={index}
              className={`cursor-pointer px-5 py-3 hover:bg-elements-hover transition-all duration-200 ease-in-out ${
                region === filter ? "bg-input-text" : ""
              }`}
              onClick={() => {
                setFilter(region);
                setIsActive(false);
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
