import React from "react";

function Dropdown({ theme, selectedItem, setSelectedItem, filterContinent}) {
  const handleFilter = (e) => {
    setSelectedItem(e.target.value);
  };

  return (
    <div className="container mt-4">
      <select
     className={`input ${theme}`}
        name="countries"
        id="countries"
        value={selectedItem}
        onChange={handleFilter}
      >
        <option value="All">All</option>
        {filterContinent.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
