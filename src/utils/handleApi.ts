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
  setCountry: React.Dispatch<React.SetStateAction<any[]>>
) => {
  setCountry(data.filter((country) => country.name === name));
};
