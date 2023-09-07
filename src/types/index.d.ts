export interface CountriesProps {
  name: {
    common: string;
    official: string;
  };
  population: number;
  region: string;
  subregion: string;
  capital?: string[];
  tld: string[];
  currencies?: CurrenciesType;
  languages: string[];
  borders?: string[];
  flags: {
    png: string;
    alt: string;
  };
}

export interface CountryProps {
  name: string;
  population: number;
  region: string;
  capital?: string[];
  flags: {
    png: string;
    alt: string;
  };
}

export interface CurrenciesType {
  [key: string]: {
    name: string;
    symbol: string;
  };
}
