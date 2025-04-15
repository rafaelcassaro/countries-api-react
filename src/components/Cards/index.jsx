import './Cards.css'
import { useCountriesContext } from "../../hooks/useCountriesContext";
import Card from "./Card";

const Cards = () => {
    const {countries, deleteCountry} = useCountriesContext();
    
    return (
        <section className='app_section'>
        {countries.map(country =>
          <Card
            key={country.id}
            country={country}
            onDeleteCountry={deleteCountry}
          />
        )}
      </section>
    )
}

export default Cards;