import { useState } from 'react';
import './Card.css'
import { BiLandscape, BiSolidLandscape } from "react-icons/bi";
import { FaCity } from "react-icons/fa";
import { FaLanguage, FaPeopleGroup } from "react-icons/fa6";
import { IoIosResize } from "react-icons/io";
import { TiDelete } from "react-icons/ti";

const Card = ({ country , onDeleteCountry}) => {
    const [isFlagLoaded, setIsFlagLoaded] = useState(false);

    return (
        <div className='card'>
            <div className='delete_button' onClick={()=> onDeleteCountry(country.id)}>
                <TiDelete size={35}/>
            </div>
            <div className='header' >
                <img src={country.flag} />

                <h2>{country.name} <br></br> {country.common} </h2>
                
            </div>
            <div className='card_line'>
                <span>
                    <BiLandscape />
                    <p className='p1'>{country.region}</p>
                </span>
                <span>
                    <BiSolidLandscape />
                    <p className='p1'>{country.subregion}</p>
                </span>
            </div>
            <div className='card_line'>
                <span>
                    <FaCity />
                    <p className='p1'>{country.capital}</p>
                </span>
                <span>
                    <FaLanguage />
                    <p className='p1'>{country.languages}</p>
                </span>
            </div>
            <div className='card_line'>
                <span>
                    <FaPeopleGroup />
                    <p className='p1'>{(country.population / 1000000).toFixed(1) + " Millions"}</p>
                </span>
                <span>
                    <IoIosResize />
                    <p className='p1'>{country.area + " km²"}</p>
                </span>
            </div>

            <div className='coat_of_arms'>
                <h3>COAT OF ARMS</h3>
                <img 
                src={country.coatOfArms} 
                alt={`${country.name} flag`} 
                onLoad={() => setIsFlagLoaded(true)}
                style={{ opacity: isFlagLoaded ? 1 : 0, transition: 'opacity 0.3s ease' }}
                />
                {!isFlagLoaded && <span>Carregando imagem...</span>}
            </div>
        </div>

    )
}

export default Card;