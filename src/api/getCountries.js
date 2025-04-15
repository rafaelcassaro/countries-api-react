import { v4 as uuidv4 } from 'uuid';

export default async function getCountry(search) {

    const response = await fetch(`https://restcountries.com/v3.1/name/${search}?fullText=true`);

    if (!response.ok) {
        console.log("Network response was not ok.");
        throw new Error('Type a valid country')
    }

    const data = await response.json();

    const firstKey = Object.keys(data[0].languages)[0];
    const firsKeyValue = data[0].languages[firstKey];

    const nativeNameFirstKey = Object.keys(data[0].name.nativeName)[0];
    const nativeName = data[0].name.nativeName[nativeNameFirstKey].common;

    return {
        id: uuidv4(),
        flag: data[0].flags.svg,
        name: data[0].name.official,
        common: nativeName,
        region: data[0].region,
        subregion: data[0].subregion,
        capital: data[0].capital,
        area: data[0].area,
        population: data[0].population,
        languages: firsKeyValue,
        coatOfArms: data[0].coatOfArms.svg
    };
}