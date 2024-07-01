import TextCamp from '../TextCamp';
import './Form.css'

const Form = (props) => {

    return (
        <section className='form'>
            <h1>Search a country</h1>
            <TextCamp
                result={props.addCountry}
            />
        </section>
    )
}


export default Form;