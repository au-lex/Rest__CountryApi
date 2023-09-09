import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDarkMode } from './Context';

function CtryDetail() {
  const { isDarkMode } = useDarkMode();
  const [country, setCountry] = useState(null);
  const { code } = useParams();
  const [borderCountries, setBorderCountries] = useState([]);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
        const data = await response.json();
        setCountry(data[0]);

        if (data[0].borders) {
          const borderNames = await Promise.all(data[0].borders.map(async (borderCode) => {
            const borderResponse = await fetch(`https://restcountries.com/v3.1/alpha/${borderCode}`);
            const borderData = await borderResponse.json();
            return borderData[0].name.common;
          }));
          setBorderCountries(borderNames);
        }
      } catch (error) {
        console.error("Error fetching the data: ", error);
      }
    };
    fetchCountry();
  }, [code]);

  if (!country) return <div><div className=' loader' >
                    
  <div className='w-[1.2rem] h-[1.2rem] rounded-full bg-slate-500'> </div>
  <div className='w-[1.2rem] h-[1.2rem] rounded-full bg-slate-500'> </div>
  <div className='w-[1.2rem] h-[1.2rem] rounded-full bg-slate-500'> </div>
 </div></div>;

  const nativeName = Object.values(country.name.nativeName)[0].common;
  const currencies = Object.values(country.currencies).map(currency => currency.name).join(', ');
  const languages = Object.values(country.languages).join(', ');

  return (
    <main className={`${isDarkMode ? 'darkmood' : ''} `}>
      <div className='bg1 h-[120] absolute right-0 left-0 top-0 z-30 pt-24'>
        <Link to={"/"} className='my-4 bg1  cursor-pointer  sh ml-[2rem] block 
         w-[20%] text-center lg:w-[10%]'>back</Link>

        <figure className='pb-[2.8rem] bg1 mb-6 w-[100%]  px-[1.2rem] lg:my-[2rem] mt-[2rem] lg:flex lg:justify-around '>
          <div className="imageContainer flex justify-center sh">
            <img src={country.flags.png} alt="flag"
             className='rounded-lg object-cover w-[355px] h-[290px] lg:w-[500px] lg:h-[320px]' />
          </div>
         <section>
          <section className='lg:flex lg:space-x-20'>
          <figcaption className='px-4 mb-[2rem] sh h-[16rem]'>
            
                <h1 className="ctryName bg capitalize text-[2.3rem] w-[80%] lg:w-[100%] font-bold mt-8">{country.name.common}</h1>
                <h3 className="ctryDesc capitalize bg text-[20px] font-semibold mt-2">
              Native Name: <span className='font-light'>{nativeName}</span>
            </h3>
                <h3 className="ctryDesc capitalize bg text-[20px] font-semibold mt-2">
                    population: <span className='font-light'>{country.population}</span>
                </h3>
                <h3 className="ctryDesc capitalize text-light  bg text-[20px] font-semibold mt-1">
                    region: <span className='font-light'>{country.region}</span>
                </h3>
                <h3 className="ctryDesc capitalize text-light  bg text-[20px] font-semibold mt-1">
                   Subregion: <span className='font-light'>{country.subregion}</span>
                </h3>
                <h3 className="ctryDesc capitalize text-light bg text-[20px] font-semibold mt-1">
                    capital: <span className='font-light'>{country.capital}</span>
                </h3>
            </figcaption>
          <figcaption className='px-4 lg:pt-[4rem] h-[8rem] py-3  sh'>
           
          
            <h3 className="ctryDesc capitalize text-light bg text-[20px] font-semibold mt-1">
              Top Level Domain: <span className='font-light'>{country.tld.join(', ')}</span>
            </h3>
            <h3 className="ctryDesc capitalize text-light bg text-[20px] font-semibold mt-1">
              Currencies: <span className='font-light'>{currencies}</span>
            </h3>
            <h3 className="ctryDesc capitalize text-light bg text-[20px] font-semibold mt-1">
              Languages: <span className='font-light'>{languages}</span>
            </h3>
           
          </figcaption>
          </section>
          </section>
        </figure>

        <div className='pb-[2rem] lg:flex'>
          <h3 className="borderDesc capitalize px-4 bg text-[25px] font-bold  ">
            Border countries
          </h3>
          <div className='flex  flex-wrap lg:flex-nowrap'>
            {borderCountries.map(countryName => (
              <li key={countryName} className='my-4 bg1 sh cursor-pointer 
               px-2 py-2 block ml-4 w-[30%]  lg:w-[8rem]  text-center'>
                {countryName}
              </li>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default CtryDetail;
