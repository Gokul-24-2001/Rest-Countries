import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Card({ country, theme }) {
  return (
    <div className={`cardhover row mt-5 p-5 px-5 ${theme}`}>
      {country.map((item, index) => (
        <div key={index} className="col-md-4 col-lg-3 col-sm-6 mb-3">
          <Link to={`/country/${item.name.common}`} className="text-decoration-none">
            <div className="card h-100 shadow">
              <img className="card-img-top flagimagesize" alt={`${item.name.common} flag`} src={item.flags.png} />
              <div className={`card-body ${theme}`}>
                <h5 className={`${theme}`}>{item.name.official}</h5>
                <div className={`card-text ${theme}`}>
                  <p><strong>Common Name:</strong> {item.name.common}</p>
                  <p><strong>Capital:</strong> {item.capital || "N/A"}</p>
                  <p><strong>Region:</strong> {item.region}</p>
                  <p><strong>Sub Region:</strong> {item.subregion || "N/A"}</p>
                  <p><strong>Continent:</strong> {item.continents?.join(", ")}</p>
                  <p><strong>Geography:</strong> lat: {item.latlng[0]}, lng: {item.latlng[1]}</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Card;
