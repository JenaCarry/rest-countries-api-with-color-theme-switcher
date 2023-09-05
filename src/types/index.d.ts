export interface CountriesProps {
  name: string;
  population: number;
  capital: string;
  region: string;
  subregion: string;
  area: number;
  nativeName: string;
  numericCode: string;
  flags: {
    png: string;
  };
  topLevelDomain: string[];
  currencies: [
    {
      code: string;
    }
  ];
  languages: [{ name: string }];
}

export interface CountryProps {
  name: string;
  population: number;
  region: string;
  capital: string;
  flags: string;
}
