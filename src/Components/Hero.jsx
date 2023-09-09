import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDarkMode } from './Context';

const Hero = ({ searchTerm, selectedRegion }) => {
    const { isDarkMode } = useDarkMode();
    const [countries, setCountries] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://restcountries.com/v3.1/all');
                const data = await response.json();
                setCountries(data);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching the data: ", error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    const filteredCountries = countries.filter(country => {
        const matchesSearchTerm = searchTerm ? country.name.common.toLowerCase().includes(searchTerm.toLowerCase()) : true;
        const matchesRegion = selectedRegion ? country.region.toLowerCase() === selectedRegion : true;

        return matchesSearchTerm && matchesRegion;
    });

    

   

    return (
        <>

        <div className="">
            {isLoading ? (
                <p className='bg' >Loading...</p>
            ) : (
                <div 
                
                className={` px-[1.5rem] lg:flex lg:flex-wrap justify-between  pt-10 lg:px-[3rem]   ${isDarkMode? 'darkmood' : ''}`}
                > 
                    {filteredCountries.map((country) => (
                        <div key={country.cca3}>

<figure className=' shadow-lg rounded-lg pb-[2.8rem] bg1 mb-6 w-[95%] h-[26rem] lg:my-[2rem] '>
<Link to={`/country/${country.cca3}`} key={country.cca3} className="imageContainer">
                <img src={country.flags.png} alt="flag" className=' rounded-lg object-cover w-[352px] h-[220px]' />
            </Link>
            <figcaption className='px-4'>
                <h1 className="ctryName bg capitalize text-[1.3rem] w-[80%] font-bold mt-2">{country.name.common}</h1>
                <h3 className="ctryDesc capitalize bg text-[20px] font-semibold mt-2">
                    population: <span className='font-light'>{country.population}</span>
                </h3>
                <h3 className="ctryDesc capitalize text-light  bg text-[20px] font-semibold mt-1">
                    region: <span className='font-light'>{country.region}</span>
                </h3>
                <h3 className="ctryDesc capitalize text-light bg text-[20px] font-semibold mt-1">
                    capital: <span className='font-light'>{country.capital}</span>
                </h3>
            </figcaption>
        </figure>

                        </div>
                    ))}
                </div>
            )}
        </div>






        

        
        </>
    )
}

export default Hero


