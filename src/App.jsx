import { useEffect, useState } from "react";
import "./App.css";
import Card from "./Components/Card";
import Navbar from "./Components/Navbar";
import Searchbar from "./Components/Searchbar";
import Dropdown from "./Components/Dropdown";
import Footer from "./Components/Footer";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [country, setCountry] = useState([]);
  const [theme, setTheme] = useState("light"); // [variable,setter function]=usestate(initial value)
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => {
        setCountry(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const togglebutton = () => {
    if (theme == "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  const filteredCountries = country.filter((item) => {
    return (
      item.name.common.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.region.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.capital && item.capital[0]?.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });
  let continent = country.flatMap((item) => {
    return item.continents;
  });
  // duplicate items removal using, set method,foreach with includes,reduce,filter,

  let filterregion = continent.filter((item, index, arr) => {
    return arr.indexOf(item) == index;
  });

  console.log(continent);

  return (
    <div className="bg-body-secondary">
      <div>
        <Navbar theme={theme} togglebutton={togglebutton} />
      </div>
      <div className="search-dropdown-container">
        <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} theme={theme}
        togglebutton={togglebutton} />
      
     
        <Dropdown
          country={country}
          theme={theme}
          togglebutton={togglebutton}
          filterregion={filterregion}
        />
      </div>
      <div>
        <Card country={filteredCountries} theme={theme} />
      </div>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
