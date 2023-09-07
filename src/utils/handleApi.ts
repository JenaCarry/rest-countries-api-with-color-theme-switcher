import { CountriesProps, CurrenciesType } from "@/types";
import data from "../../data.json";

export const getAllCountries = async (
  setCountries: React.Dispatch<React.SetStateAction<any[]>>,
  setShow: (test: boolean) => void
) => {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();

    setCountries(data);
    setShow(true);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getCountryInfo = async (
  name: string,
  setCountry: React.Dispatch<React.SetStateAction<any[]>>
) => {
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${name}?fullText=true`
    );
    const data = await response.json();

    setCountry(data);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getFullCountryName = async (
  borders: string[],
  setNeighbors: React.Dispatch<React.SetStateAction<any[]>>
) => {
  const response = await fetch(
    `https://restcountries.com/v3.1/alpha?codes=${borders?.join(",")}`
  );
  const data = await response.json();

  setNeighbors(data);
};

export const getCurrencies = (obj: CurrenciesType = {}): string[] | null => {
  const arr: string[] = new Array();
  const keys = Object.keys(obj);
  if (!keys.length) return null;
  for (let item of keys) {
    arr.push(obj[item].name);
  }
  return arr;
};
