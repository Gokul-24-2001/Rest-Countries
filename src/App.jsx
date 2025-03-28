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
  const[selecteditem,setSelectedItem]=useState("All")

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
    
       const serachmatches=item.name.common.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.region.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.capital && item.capital[0]?.toLowerCase().includes(searchTerm.toLowerCase())) 
     
      const dropdownmatch= selecteditem==="All"||(item.continents && item.continents[0]?.toLowerCase().includes(selecteditem.toLowerCase()))
      return serachmatches&&dropdownmatch
    
  });
 
  let continent = country.flatMap((item) => {
    return item.continents;
  });
  // duplicate items removal using, set method,foreach with includes,reduce,filter,

  let filterContinent = continent.filter((item, index, arr) => {
    return arr.indexOf(item) == index;
  });

  // console.log(selecteditem);

  return (
    <div className="bg-body-secondary d-grid text-center">
      <div className="py-sm-1">
        <Navbar theme={theme} togglebutton={togglebutton} />
      </div>
      <div className="row p-sm-3 mt-5">
    
       <div className="col-sm-6 col-md-4 mt-5"> <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} theme={theme}
        togglebutton={togglebutton} />
        </div>
     <div className="col-md-8 col-sm-6 mt-5"> 
      <Dropdown
        selecteditem={selecteditem}
        setSelectedItem={setSelectedItem}
          theme={theme}
          togglebutton={togglebutton}
          filterContinent={filterContinent}
        /></div>
       
      </div>
      <div>
        <Card country={filteredCountries} theme={theme} />
      </div>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
