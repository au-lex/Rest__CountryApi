
import React, { useState, useEffect } from 'react';
import { useDarkMode } from './Context';
import Lightmood from './Lightmood';
import Darkmood from './Darkmood';


   
  const Header = ({ onSearchChange,  onRegionChange }) => {
    const [openDropDown, SetdropDown] = useState(false)

    const { isDarkMode, setIsDarkMode } = useDarkMode();
    function openDROP() {
        SetdropDown(!openDropDown)
    }

    const [searchTerm, setSearchTerm] = useState("");

    function handleSearchChange(e) {
        setSearchTerm(e.target.value);
        onSearchChange(e.target.value); 
    }

    const [selectedRegion, setSelectedRegion] = useState("");


    function handleRegionClick(region) {
      setSelectedRegion(region);
      onRegionChange(region);
      openDROP(); 
  }
  
  




  return (


    <>

    <main className={` 
   ${isDarkMode? 'darkmood' : ''}  `}>

 <section   className="shadow-md py-6 flex justify-between px-4  z-40 bg1 fixed w-full
  ">
    <h1 className=' text-[18px] bg'>Where in the world</h1>
    <div className="logo bg " onClick={() => setIsDarkMode(prev => !prev)}>
        { isDarkMode ? <Lightmood/> :  <Darkmood /> }
      </div>
 </section>

 

<section className='px-3 py-6 lg:flex justify-between lg:px-12 pt-[6rem]'>
  <div className='relative my-4 '> 
    <span class="absolute inset-y-0 left-0 flex items-center pl-2">
      <i class="ri-search-line"></i></span>

<input  onChange={handleSearchChange}   className=" bg1 bor block  w-full   
 rounded-md py-4 pl-9 pr-3   focus:outline-none focus:border-sky-500
 focus:ring-sky-500 focus:ring-1 sm:text-sm lg:w-[40rem] " 
placeholder="Search for anything..." type="search" name="search"  />




</div>



<section className='dropDown'>
                 <div onClick={openDROP} className='w-[60%] lg:w-[20rem] bor bg1 shadow-md h-[3.5rem] 
                py-4  cursor-pointer  relative pl-5  rounded-[8px] bg'>
                    {selectedRegion || "Filter by Region"}
                    <span className=' text-[30px]    right-3 absolute top-2'><i class="ri-arrow-drop-down-line"></i></span>
                </div>
                {openDropDown && (
                    <section className={`dropdown_content   ${openDropDown ? "open" : ""}`}>
                    
                        <div className='w-[60%] drop_container  absolute mt-5 bg1  h-[12rem] lg:w-[20rem] 
                        rounded-[8px] shadow-lg'>
                            {["africa",  "asia", "europe", "oceania"].map(region => (
                                <li key={region} className=' list-none text-[18px]  
                                cursor-pointer capitalize pt-4 ml-4'
                                 onClick={() => handleRegionClick(region)}>
                                    {region}
                                </li>
                            ))}
                        </div>
                      
                    </section>
                )} 
            </section>
           






</section>
  

</main>
    </>
  );
}

export default Header;





