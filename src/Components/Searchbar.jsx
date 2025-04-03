import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
function Searchbar({ theme, searchTerm, togglebutton, setSearchTerm }) {
  const [isTyping, setIsTyping] = useState(false);
  return (
    <div className="mt-3">
      <div className="position-relative">
        <input
          className={`${theme} ${togglebutton} search-input border rounded-2`}
          type="search"
          value={searchTerm}
          id="search-country"
          name="search-country"
          onChange={(e) => {setSearchTerm(e.target.value);
            setIsTyping(e.target.value.length>0);
          }
        }
        />
        <div className={`search-icon ${theme} ${togglebutton}`}>
          <FontAwesomeIcon icon={faMagnifyingGlass} className={`me-2 ${theme} ${togglebutton}`} />
         {!isTyping && <span className={`${theme} ${togglebutton}`}>Search for a Country...</span>} 
        </div>
      </div>
    </div>
  );
}

export default Searchbar;
