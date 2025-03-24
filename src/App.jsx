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
  const [theme, setTheme] = useState("light");

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
  console.log(country);

  return (
    <>
      <Navbar theme={theme} togglebutton={togglebutton} />

      <div className="container text-center">
        <div className="row p-2 my-5">
          <div className="col">
            <Searchbar />
          </div>
          <div className="col">
            <Dropdown
              country={country}
              theme={theme}
              togglebutton={togglebutton}
            />
          </div>
        </div>
      </div>
      <Card country={country} />
      <Footer />
    </>
  );
}

export default App;
