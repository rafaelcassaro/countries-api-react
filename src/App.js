import './App.css';
import Banner from './components/Banner';
import { v4 as uuidv4 } from 'uuid';
import Form from './components/Form';
import { useState } from 'react';
import Card from './components/Card';

function App() {

  const [countries, setCountries] = useState([
    {
      id: uuidv4(),
      flag: 'https://flagcdn.com/mx.svg',
      name: 'United Mexican States',
      common: 'Mexico',
      region: 'Europe',
      subregion: 'South America',
      capital: 'Mexico City',
      area: 1964375,
      population: 128932753,
      languages: 'Spanish',
      coatOfArms: 'https://mainfacts.com/media/images/coats_of_arms/mx.svg'
    },
    {
      id: uuidv4(),
      flag: 'https://flagcdn.com/eg.svg',
      name: 'Arab Republic of Egypt',
      common: 'مصر',
      region: 'Africa',
      subregion: 'Northern Africa',
      capital: 'Cairo',
      area: 1002450,
      population: 102334403,
      languages: 'Arabic',
      coatOfArms: 'https://mainfacts.com/media/images/coats_of_arms/eg.svg'
    },
    {
      id: uuidv4(),
      flag: 'https://flagcdn.com/br.svg',
      name: 'Federative Republic of Brazil',
      common: 'Brasil',
      region: 'Americas',
      subregion: 'South America',
      capital: 'Brasília',
      area: 8515767,
      population: 212559409,
      languages: 'Portuguese',
      coatOfArms: 'https://mainfacts.com/media/images/coats_of_arms/br.svg'
    }
  ])


  function addNewCountry(newCount) {
    setCountries([...countries, newCount])
  }

  function deleteCountry(id) {
    let idToDelete = countries.find(country => country.id === id);

    if(idToDelete){
      countries.splice(countries.indexOf(idToDelete),1)
      setCountries([...countries]);
    }
  }


  return (
    <div className="App">
      <Banner />
      <Form
        addCountry={addNewCountry}
        passCountry={countries[countries.length - 1]}
      />
      <hr></hr>
      <section className='app_section'>
        {countries.map(country =>
          <Card
            key={country.id}
            country={country}
            deleteCountry={deleteCountry}
          />
        )}
      </section>

    </div>
  );
}

export default App;
