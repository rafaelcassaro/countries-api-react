import './Card.css'
import { BiLandscape, BiSolidLandscape } from "react-icons/bi";
import { FaCity } from "react-icons/fa";
import { FaLanguage, FaPeopleGroup } from "react-icons/fa6";
import { IoIosResize } from "react-icons/io";
import { IoLanguage } from "react-icons/io5";

const Card = ({ country }) => {


    return (
        <div className='card'>
            <div className='header'>
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
                <img src={country.coatOfArms} />
            </div>
        </div>

    )
}


export default Card;