export interface CountriesProps {
  name: {
    common: string;
  };
  population: number;
  region: string;
  capital: string;
  numericCode: number;
  flags: {
    png: string;
  };
}

export interface CountryProps {
  name: string;
  population: number;
  region: string;
  capital: string;
  numericCode: number;
  flags: string;
}
