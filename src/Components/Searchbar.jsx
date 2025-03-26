  import React from "react";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
  function Searchbar({theme,togglebutton,searchTerm,setSearchTerm}) {
    return (
      <div className={`${theme} ${togglebutton}`}>
        <input
          className="input"
          placeholder="Search ..."
          type="search"
          value={searchTerm}
          id="search-country"
          name="search-country"
          onChange={(e)=>setSearchTerm(e.target.value)}
        ></input>
        {/* <p>
        
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </p> */}
      </div>
    );
  }

  export default Searchbar;
