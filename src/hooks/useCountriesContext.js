import { useContext } from "react"
import { CountriesContext } from "../context/CountriesContext.jsx";


export const useCountriesContext = () => {
    const { countries, setCountries } = useContext(CountriesContext);

    function addNewCountry(newCount) {
        setCountries([...countries, newCount])
    }

    function deleteCountry(id) {
        const idToDelete = countries.find(country => country.id === id);

        if (idToDelete) {
            countries.splice(countries.indexOf(idToDelete), 1)
            setCountries([...countries]);
        }
    }

    return {
        countries,
        addNewCountry,
        deleteCountry
    }
}