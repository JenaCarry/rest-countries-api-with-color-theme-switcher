"use client";

import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

interface FormProps {
  selected: string;
  setSelected: (selected: string) => void;
}

export function Form({ selected, setSelected }: FormProps) {
  const [isActive, setIsActive] = useState(false);
  const regions = [
    "Africa",
    "America",
    "Asia",
    "Europe",
    "Oceania",
    "Antarctica",
  ];

  return (
    <form className="space-y-12">
      <div className="relative flex items-center">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search for a country"
          className="w-full text-input-text bg-elements py-4 shadow-md pl-12 rounded-lg"
        />
        <FaSearch className="absolute left-5" />
      </div>

      <div className="relative font-semibold w-64 min-[481px]:w-80 space-y-4">
        <div
          className="flex items-center justify-between bg-elements py-4 shadow-md rounded-lg px-5 cursor-pointer"
          onClick={() => setIsActive(!isActive)}
        >
          <span className="text-primary-text">{selected}</span>
          <FaAngleDown
            className={`text-primary-text text-base transition-all duration-200 ease-in-out ${
              isActive && "rotate-180"
            }`}
          />
        </div>
        <ul
          className={`w-full absolute bg-elements shadow-md rounded-lg z-10 overflow-hidden transition-all duration-200 ease-in-out ${
            isActive ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1"
          }`}
        >
          {regions.map((region, index) => (
            <li
              key={index}
              className="cursor-pointer px-5 py-3 hover:bg-elements-hover transition-all duration-200 ease-in-out"
              onClick={() => {
                setSelected(region);
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
