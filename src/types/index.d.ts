export interface CountriesProps {
  name: {
    common: string;
  };
  population: number;
  region: string;
  capital: string;
  flags: {
    png: string;
  };
}

export interface CountryProps {
  name: string;
  population: number;
  region: string;
  capital: string;
  flags: string;
}
