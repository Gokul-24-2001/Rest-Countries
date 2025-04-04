import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const CountryDetails = ({ countries, theme }) => {
  const { name } = useParams();
  const navigate = useNavigate();

  console.log("Countries:", countries);
  console.log("Name from URL:", name);

  if (!countries || countries.length === 0) {
    return <div className="text-center mt-5">Loading...</div>;
  }

  const country = countries.find(
    (c) => c.name.common.toLowerCase() === name.toLowerCase().trim()
  );

  if (!country) {
    return <div className="text-center mt-5">Country not found!</div>;
  }

  return (
    <div className={`container p-5 ${theme === "dark" ? "bg-dark text-white" : ""}`}>
      <button className="btn btn-primary m-5" onClick={() => navigate(-1)}>
        Back
      </button>
      <div className="d-flex gap-5">
        <img src={country.flags?.png} className="card-img-top h-25 w-50" alt={country.name.common} />
        <div className="card-body">
          <h5 className="card-title">{country.name.common}</h5><br/>
          <p><strong>Official Name:</strong> {country.name?.official}</p>
          <p><strong>Capital:</strong> {country.capital?.[0] || "N/A"}</p>
          <p><strong>Region:</strong> {country.region}</p>
          <p><strong>Subregion:</strong> {country.subregion || "N/A"}</p>
          <p><strong>Population:</strong> {country.population?.toLocaleString()}</p>
          <p><strong>Languages:</strong> {Object.values(country.languages || {}).join(", ") || "N/A"}</p>
          <p><strong>Currency:</strong> {Object.values(country.currencies || {}).map(c => c.name).join(", ") || "N/A"}</p>
          <p><strong>Timezone:</strong> {country.timezones?.[0] || "N/A"}</p>
        </div>
      </div>
    <div>
    {country.maps?.googleMaps && (
  <div className="mt-4">
    <h4>Location on Map</h4>
    <iframe
      title="Google Maps"
      src={`https://www.google.com/maps?q=${encodeURIComponent(country.name.common)}&output=embed`}
      width="90%"
      height="400"
      style={{ border: 0}}
      allowFullScreen
      loading="lazy"
    ></iframe>
  </div>
)}



    </div>
    </div>
  );
};

export default CountryDetails;
