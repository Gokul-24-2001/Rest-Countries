import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
function Navbar({ theme, togglebutton }) {
  return (
    <div>
    <nav className={`navbar p-3 z-1 position-fixed w-100 ${theme} fs-4 nav1`}>
      <div className="px-5 mx-5">
        <b>Where is the World?</b>
      </div>
      <div className="px-5 mx-5"> 
        <button
          type="button"
          onClick={togglebutton}
          className={`button-style ${theme}`}
        >
          <FontAwesomeIcon  icon={faMoon} />
         {theme=="light"?<span className="p-1">Lightmode </span>:<span className="p-1">Darkmode </span>} 
        </button>
      </div>
    </nav>
    </div>
  );
}

export default Navbar;
