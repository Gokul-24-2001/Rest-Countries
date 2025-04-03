import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
function Navbar({ theme,toggleButton }) {
  return (
    <nav
      className={`navbar p-3 p-xs-0 z-1 position-fixed w-100 ${theme} fs-4`}
    >
      <div className="px-5">
        <b>Where is the World?</b>
      </div>
      <div className="px-5 mx-sm-0 px-sm-2">
        <button
          type="button"
          onClick={toggleButton}
          className={`button-style ${theme}`}
        >
          <FontAwesomeIcon icon={faMoon} />
          {theme == "light" ? (
            <span className="p-1">Lightmode </span>
          ) : (
            <span className="p-1">Darkmode </span>
          )}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
