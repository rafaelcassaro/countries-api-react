import './TextCamp.css'
import { useState } from 'react';
import { useCountriesContext } from '../../hooks/useCountriesContext';
import getCountry from '../../api/getCountries';

const TextCamp = () => {
    const [search, setSearch] = useState('');
    const {addNewCountry} = useCountriesContext();

    async function applySearch(event) {
        event.preventDefault();
        try {
            addNewCountry(await getCountry(search));
        } catch (error) {
            alert(
                "There has been a problem with the operation: " + error.message,
            );
        }
    }

    const handleInput = (event) => {
        setSearch(event.target.value)
    }

    return (
        <div className='text_field'>
            <form onSubmit={applySearch}>
                <input
                    type='text'
                    placeholder='Type a country'
                    value={search}
                    onChange={handleInput}
                />
                <button>Search</button>
            </form>
        </div>
    )
}

export default TextCamp;