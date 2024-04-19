import logo from './logo.svg';
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
    }
  ])
  // let passCountry = {}
  // function newCountry (country){
  //   setCountries([...countries, country])
  //   // let chavesObjeto = Object.entries(advvd);
  //   // console.log("app chavesObjeto "+chavesObjeto);
  //   // console.log("app: "+advvd);
  // }

  // const [newCountry, setNewCountry] = useState({})
  //---------------



  function addNewCountry(newCount) {
    // setNewCountry(newCount);
    // const primeiraChave = Object.keys(newCountry.languages)[0];
    // const valorDaPrimeiraChave = newCountry.languages[primeiraChave];
    // passCountry = {
    //   id: uuidv4(),
    //   flag: newCountry.flags.svg,
    //   // name: newCountry.name.official,
    //   // common: newCountry.name.common,
    //   region: newCountry.region,
    //   border: newCountry.subregion,
    //   capital: newCountry.capital,
    //   area: newCountry.area,
    //   population: newCountry.population,
    //   languages: valorDaPrimeiraChave,
    //   coatOfArms: newCountry.coatOfArms.svg
    // }

    // const chavesObjeto = Object.entries(newCountry);
    // nome = newCountry.name.official;
    // console.log("chaves nomenome " + newCountry.fifa);
    // console.log("chaves nomenome " + passCountry.area);
    // console.log("chaves nomenome "+chavesObjeto);
    console.log('4addNewCountry');
    setCountries([...countries, newCount])
  }


  //--------------

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
            country={country}
          />
        )}
      </section>

    </div>
  );
}

export default App;
