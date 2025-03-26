import React from "react";
import Card from './Card'
import { useState } from "react";
function Dropdown({ country,theme,Region,togglebutton,filterregion,Card}) {
  const[selecteditem,setSelectedItem]=useState("All")
  const handleFilter=(e)=>{
    setSelectedItem(e.target.value);
  } 
 
   
 console.log(Region)
    return (
    <div className="dropdown">
      <select
        className={`${theme} ${togglebutton}`}
        name="countries"
        id="countries"
        value={selecteditem}
        onChange={handleFilter}
      >
        <option value="All"> All</option>
        {filterregion.map((item,index) => {
          return (
            <option
            key={index}
              className={`${theme} ${togglebutton}`}
              value={item}
              
            >
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default Dropdown;
