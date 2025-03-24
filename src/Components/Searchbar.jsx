  import React from "react";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
  function Searchbar() {
    return (
      <div>
        <input
          className="input"
          placeholder="Search ..."
          type="search"
          id="search-country"
          name="search-country"
        ></input>
        {/* <p>
        
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </p> */}
      </div>
    );
  }

  export default Searchbar;
