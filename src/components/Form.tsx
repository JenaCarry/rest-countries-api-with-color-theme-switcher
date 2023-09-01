"use client";

import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

export function Form() {
  const [isActive, setIsActive] = useState(false);

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
          className="flex items-center justify-between bg-elements py-4 shadow-md rounded-lg px-5"
          onClick={() => setIsActive(!isActive)}
        >
          <span className="text-primary-text">Filter by Region</span>
          <FaAngleDown
            className={`text-primary-text text-base transition-all duration-200 ease-in-out ${
              isActive && "rotate-180"
            }`}
          />
        </div>
        {isActive && (
          <div className="w-full absolute bg-elements shadow-md rounded-lg px-5 py-5 space-y-5">
            <div>Africa</div>
            <div>America</div>
            <div>Asia</div>
            <div>Europe</div>
            <div>Oceania</div>
          </div>
        )}
      </div>
    </form>
  );
}
