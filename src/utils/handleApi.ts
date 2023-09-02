export const getAllCountries = async (
  setCountries: React.Dispatch<React.SetStateAction<any[]>>
) => {
  const url = "https://restcountries.com/v3.1/all";
  const res = await fetch(url);
  const data = await res.json();

  setCountries(data);
};
