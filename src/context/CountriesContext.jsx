import { createContext, useState } from "react";
import data from "../mocks/coutries.json";

export const CountriesContext = createContext();

export const CountriesProvider = ({ children }) => {
  const [countries, setCountries] = useState(data);

  return (
    <CountriesContext.Provider value={{ countries, setCountries }}>
      {children}
    </CountriesContext.Provider>
  );
};