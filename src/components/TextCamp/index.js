import { useEffect, useState } from 'react';
import './TextCamp.css'
import { v4 as uuidv4 } from 'uuid';

const TextCamp = (props) => {


    const [search, setSearch] = useState('');
    const [newCountry, setNewCountry] = useState({})


    async function applySearch(country) {
        country.preventDefault();
        //setSearchInput(search);

        await fetch(`https://restcountries.com/v3.1/name/${search}?fullText=true`)
            .then(response => {
                if (response.ok) {
                    response.json()
                        .then(data => {

                            const primeiraChave = Object.keys(data[0].languages)[0];
                            const valorDaPrimeiraChave = data[0].languages[primeiraChave];

                            const nativeNameFirstKey = Object.keys(data[0].name.nativeName)[0];
                            const nativeName = data[0].name.nativeName[nativeNameFirstKey].common

                            setNewCountry({
                                id: uuidv4(),
                                flag: data[0].flags.svg,
                                name: data[0].name.official,
                                common: nativeName,
                                region: data[0].region,
                                subregion: data[0].subregion,
                                capital: data[0].capital,
                                area: data[0].area,
                                population: data[0].population,
                                languages: valorDaPrimeiraChave,
                                coatOfArms: data[0].coatOfArms.svg
                            });

                        })
                } else {
                    console.log("Network response was not ok.");
                    alert("Type a valid country");
                }

            }).catch(function (error) {
                alert(
                    "There has been a problem with the operation: " + error.message,
                );
            });
    }

    const onTyped = (evento) => {
        setSearch(evento.target.value)
    }

    useEffect(() => {
        console.log("props.result:" + typeof Object.entries(newCountry)); // Aqui você verá o newCountry atualizado
        if (Object.hasOwn(newCountry, 'id')) {
            console.log("props.result:dentro: " + newCountry.flag);
            props.result(newCountry);
        }

    }, [newCountry]);

    return (
        <div className='text_field'>
            <form onSubmit={applySearch}>
                <input
                    type='text'
                    placeholder='Type a country'
                    value={search}
                    onChange={onTyped}
                />
                <button>Search</button>
            </form>
        </div>
    )
}


export default TextCamp;