import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const CountryDetails = ({ countries, theme }) => {
  const { name } = useParams();
  const navigate = useNavigate();

  const country = countries.find((c) => c.name.common === name);

  if (!country) {
    return <div className="text-center mt-5">Country not found!</div>;
  }

  return (
    <div className={`container mt-4 ${theme === "dark" ? "bg-dark text-white" : ""}`}>
      <button className="btn btn-primary mb-3" onClick={() => navigate(-1)}>
        Back
      </button>
      <div className="card">
        <img src={country.flags.png} className="card-img-top" alt={country.name.common} />
        <div className="card-body">
          <h5 className="card-title">{country.name.common}</h5>
          <p><strong>Official Name:</strong> {country.name.official}</p>
          <p><strong>Capital:</strong> {country.capital?.[0]}</p>
          <p><strong>Region:</strong> {country.region}</p>
          <p><strong>Subregion:</strong> {country.subregion}</p>
          <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
          <p><strong>Languages:</strong> {Object.values(country.languages || {}).join(", ")}</p>
          <p><strong>Currency:</strong> {Object.values(country.currencies || {}).map(c => c.name).join(", ")}</p>
          <p><strong>Timezone:</strong> {country.timezones[0]}</p>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
