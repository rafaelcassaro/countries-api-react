import { useState } from 'react';
import Banner from '../Banner';
import Card from '../Card';
import TextCamp from '../TextCamp';
import './Form.css'
import { v4 as uuidv4 } from 'uuid';

const Form = (props) => {



    // console.log("newCountry " + newCountry.fifa);





    return (
        <section className='form'>
            <h1>Search a country</h1>
            <Card
                country={props.passCountry}
            />
            <TextCamp
                result={props.addCountry}
            />
        </section>
    )
}


export default Form;