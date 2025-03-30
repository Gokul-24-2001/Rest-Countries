import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
function Searchbar({ theme, searchTerm, togglebutton, setSearchTerm }) {
  return (
    <div>
      <input
        className={`input ${theme}`}
        placeholder="Search ..."
        type="search"
        value={searchTerm}
        id="search-country"
        name="search-country"
        onChange={(e) => setSearchTerm(e.target.value)}
      ></input>
    </div>
  );
}

export default Searchbar;
