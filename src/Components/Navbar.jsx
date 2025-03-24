import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
function Navbar({theme,togglebutton}) {
 
  
  return (
    <nav className={`navbar fs-5 d-flex flex-row mx-6 px-4 py-4 ${theme}`}>
    <div className='px-5 fs-4'><b>Where is the World?</b></div>
     
     <div className='px-5 fs-4'>
    <button type="button"onClick={togglebutton} className={`button-style ${theme}`}>
      <FontAwesomeIcon  className={`${theme}`}icon={faMoon}/>
      <span className={`${theme}`}>Lightmode </span></button></div>
   
      </nav>
  )
}

export default Navbar