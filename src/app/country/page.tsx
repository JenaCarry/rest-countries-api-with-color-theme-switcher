"use client";

import { CountriesProps } from "@/types";
import { getCountry } from "@/utils/handleApi";
import Link from "next/link";
import { useEffect, useState } from "react";
import Country from "./Country";

interface HomeProps {
  searchParams: {
    name: string;
  };
}

export default function Home({ searchParams }: HomeProps) {
  return (
    <main>
      <Country searchParams={searchParams} />
    </main>
  );
}
