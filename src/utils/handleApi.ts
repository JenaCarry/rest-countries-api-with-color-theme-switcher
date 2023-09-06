import data from "../../data.json";

export const getAllCountries = async (
  setCountries: React.Dispatch<React.SetStateAction<any[]>>,
  setShow: (test: boolean) => void
) => {
  setCountries(data);
  setShow(true);
};

export const getCountry = async (
  name: string,
  setCountry: React.Dispatch<React.SetStateAction<any[]>>,
  setBorderCountries: React.Dispatch<React.SetStateAction<any[]>>
) => {
  setCountry(data.filter((country) => country.name === name));
  const bordersAlphaCode = data
    .filter((country) => country.name === name)
    .map((border) => border.borders)[0];

  const results: string[] = new Array();

  if (bordersAlphaCode) {
    for (let border of bordersAlphaCode) {
      results.push(
        data.find((country) => country.alpha3Code === border)?.name || ""
      );
    }
    setBorderCountries(results);
  }
};
