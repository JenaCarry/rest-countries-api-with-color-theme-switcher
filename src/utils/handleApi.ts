import { CountriesProps, CurrenciesType } from "@/types";

export const getAllCountries = async (
  setCountries: (countries: CountriesProps[]) => void,
  setIsLoading: (loading: boolean) => void
) => {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();

    setCountries(data);
  } catch (error) {
    console.log(error);
    throw error;
  } finally {
    setIsLoading(false);
  }
};

export const getCountryInfo = async (
  name: string,
  setCountry: (country: CountriesProps[]) => void,
  setIsLoading: (loading: boolean) => void
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
  } finally {
    setIsLoading(false);
  }
};

export const getFullCountryName = async (
  borders: string[],
  setNeighbors: (neighbors: CountriesProps[]) => void
) => {
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/alpha?codes=${borders?.join(",")}`
    );
    const data = await response.json();

    setNeighbors(data);
  } catch (error) {
    console.log(error);
    throw error;
  }
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
