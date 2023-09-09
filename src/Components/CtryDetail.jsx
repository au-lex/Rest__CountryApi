import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';



function CtryDetail() {
  const [country, setCountry] = useState(null);
  const { code } = useParams();

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
        const data = await response.json();
        setCountry(data[0]);
      } catch (error) {
        console.error("Error fetching the data: ", error);
      }
    };

    fetchCountry()
  }, [code]);

  if (!country) return <div>Loading...</div>;

  return (
    <div>
      <Link to={"/"}>back</Link>
      <h1 className='text-[4rem] text-white'>{country.name.common}</h1>
      {/* <p><strong>Native Name:</strong> {Object.values(country.name.nativeName)[0]}</p> */}
      <p><strong>Region:</strong> {country.region}</p>
      <p><strong>Subregion:</strong> {country.subregion}</p>
      <p><strong>Capital:</strong> {country.capital}</p>
      {/* <p><strong>Border Countries:</strong> {country.borders.join(', ')}</p> */}
      {/* <p><strong>Currencies:</strong> {Object.keys(country.currencies).join(', ')}</p> */}
    </div>
  );
}

export default CtryDetail;


