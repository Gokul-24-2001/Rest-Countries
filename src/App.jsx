import { useEffect, useState } from "react";
import "./App.css";
import Card from "./Components/card";
import Navbar from "./Components/Navbar";
import Searchbar from "./Components/Searchbar";
import Dropdown from "./Components/Dropdown";
import Footer from "./Components/Footer";
import axios from "axios";
function App() {
  const [country, setCountry] = useState([]);
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => {
        setCountry(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(country);
  return (
    <>
      <Navbar />
      <Searchbar />
      <Dropdown />
      <Card country={country} />;
      <Footer />
    </>
  );
}

export default App;
