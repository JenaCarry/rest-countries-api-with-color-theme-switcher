export interface CountriesProps {
  name: {
    common: string;
  };
  population: number;
  region: string;
  capital: string;
  numericCode: number;
  flags: {
    svg: string;
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
