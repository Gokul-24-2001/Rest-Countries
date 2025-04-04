import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Card from "./Components/Card";
import Navbar from "./Components/Navbar";
import Searchbar from "./Components/Searchbar";
import Dropdown from "./Components/Dropdown";
import Footer from "./Components/Footer";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import CountryDetails from "./Components/CountryDetails";

function App() {
  const [countries, setCountries] = useState([]); // Renamed to "countries" for clarity
  const [theme, setTheme] = useState("light");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItem, setSelectedItem] = useState("All");

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setCountries(res.data))
      .catch((err) => console.log("Error fetching countries:", err));
  }, []);

  const toggleButton = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const filteredCountries = countries.filter((item) => {
    const searchMatches =
      item.name.common.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.region?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.capital &&
        item.capital[0]?.toLowerCase().includes(searchTerm.toLowerCase()));

    const dropdownMatch =
      selectedItem === "All" ||
      (item.continents &&
        item.continents[0]?.toLowerCase().includes(selectedItem.toLowerCase()));

    return searchMatches && dropdownMatch;
  });

  return (
    <Router>
      <div className={`bg-body-secondary`}>
        <Navbar theme={theme} toggleButton={toggleButton} />
        <div className="container-fluid">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <div className="container pt-5">
                    <div className="row mt-5">
                      <div className="col-12 col-sm-6">
                        <Searchbar
                          searchTerm={searchTerm}
                          setSearchTerm={setSearchTerm}
                          theme={theme}
                          toggleButton={toggleButton}
                        />
                      </div>
                      <div className="col-12 col-sm-6">
                        <Dropdown
                          selectedItem={selectedItem}
                          filterContinent={[
                            ...new Set(countries.flatMap((c) => c.continents || [])), // Added fallback for missing continents
                          ]}
                          theme={theme}
                          toggleButton={toggleButton}
                          setSelectedItem={setSelectedItem}
                        />
                      </div>
                    </div>
                  </div>
                  <Card country={filteredCountries} theme={theme} />
                </>
              }
            />
            {/* Fixed prop name from `country` to `countries` */}
            <Route
              path="/country/:name"
              element={<CountryDetails countries={countries} theme={theme} />}
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
