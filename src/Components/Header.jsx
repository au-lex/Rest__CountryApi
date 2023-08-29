
import React, { useState, useEffect } from 'react';

const Header = () => {
   
  const [openDropDown, SetdropDown] = useState(false)

  function openDROP() {
    SetdropDown(!openDropDown)
  }


  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
    const [results, setResults] = useState([]);
  
    useEffect(() => {
      async function fetchCountries() {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        setCountries(data);
      }
      fetchCountries();
    }, []);
  
    useEffect(() => {
      const filteredCountries = countries.filter(country =>
        country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setResults(filteredCountries);
    }, [countries, searchTerm]);




  return (

    <>

 <section className='flex justify-between px-4   shadow-md py-6 bg-dark'>
    <h1 className='text-light text-[18px]'>Where in the world</h1>
    <div className="logo text-light ">
      <span ><i class="ri-moon-fill"></i></span>  <span className='capitalize px-1'>dark mood</span>

    </div>
 </section>

 

<section className='px-3 mt-4'>
  <div className='relative my-4'> 
    <span class="absolute inset-y-0 left-0 flex items-center pl-2 text-light"><i class="ri-search-line"></i></span>

<input  onChange={(e) =>  setSearchTerm(e.target.value)}    class=" placeholder:text-light  text-light  block bg-dark w-full 
 rounded-md py-4 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500
 focus:ring-sky-500 focus:ring-1 sm:text-sm" 
placeholder="Search for anything..." type="search" name="search"/>




</div>



<section className='dropDown  mt-6 '  >
<div onClick={openDROP} className='w-[60%] bg-dark shadow-md h-[3.5rem] py-4 text-light cursor-pointer  relative pl-5 rounded-[8px]'> Filter by Region
  <span className='text-light text-[30px]  right-3 absolute top-2'><i class="ri-arrow-drop-down-line"></i></span> 
  </div>

{ openDropDown && (

   <section   className={`dropdown_content mt-2 ${openDropDown ? "open" : ""}`}>
    <div className='w-[60%] drop_container bg-dark h-[12rem] rounded-[8px] shadow-lg'> 
  <li className='text-light list-none capitalize text-[16px] pt-4 ml-4'>africa</li>
  <li className='text-light list-none capitalize text-[16px] pt-2 ml-4'>america</li>
  <li className='text-light list-none capitalize text-[16px] pt-2 ml-4'>asia</li>
  <li className='text-light list-none capitalize text-[16px] pt-2 ml-4'>Europe</li>
  <li className='text-light list-none capitalize text-[16px] pt-2 ml-4'>ocenia</li>
    </div>
   </section>



 
 
)};
</section>
</section>
  

<section className='lg:flex'>
{results.map((country, index) => (
          <li key={index} className='px-[1.5rem]'>
           <figure className='bg-dark shadow-lg rounded-lg pb-[2.8rem] mb-6'>
<div  className="imageContainer w-[342px] h-[220px]">
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
          </li> 





))}
          </section>


    </>
  );
}

export default Header;





