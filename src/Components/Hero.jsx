import React from 'react';
import { useState, useEffect } from 'react';
// import img from "../assets/download.png"

const Hero = () => {

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



    

   

    return (
        <>

        <div className="App">
            {isLoading ? (
                <p className='text-light' >Loading...</p>
            ) : (
                <div className='px-[1.5rem] lg:flex lg:flex-wrap'> 
                    {countries.map((country) => (
                        <div key={country.cca3}>

<figure className='bg-dark shadow-lg rounded-lg pb-[2.8rem] mb-6'>
            <div key={country.cca3} className="imageContainer w-[342px] h-[220px]">
                <img src={country.flags.png} alt="flag" className='w-[100%] rounded-lg' />
            </div>
            <figcaption className='px-4'>
                <h1 className="ctryName text-light capitalize text-[2rem] font-bold mt-2">{country.name.common}</h1>
                <h3 className="ctryDesc capitalize text-light text-[20px] font-semibold mt-2">
                    population: <span className='font-light'>{country.population}</span>
                </h3>
                <h3 className="ctryDesc capitalize text-light text-[20px] font-semibold mt-1">
                    region: <span className='font-light'>{country.region}</span>
                </h3>
                <h3 className="ctryDesc capitalize text-light text-[20px] font-semibold mt-1">
                    capital: <span className='font-light'>{country.capital}</span>
                </h3>
            </figcaption>
        </figure>

                        </div>
                    ))}
                </div>
            )}
        </div>






        

        {/* <section */}



        {/* {isLoading ? (
                <p>Loading...</p>
            ) : (
                <div>
                  

                    {countries.map((country) => (
            <section className="ctryContainer flex justify-center">
                        
            
                            

         

                        
            </section>
                    ))}
                </div>
            )}


       
        </section>
         */}
        </>
    )
}

export default Hero
