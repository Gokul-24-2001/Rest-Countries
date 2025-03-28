import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Card({country,theme}) {   
  return (
    <div className={`row mt-5 p-5 px-5 ${theme}`}>
      {country.map((item,index) => (
        <div key={"country"+index} className="col-md-4 col-lg-3 col-sm-6 mb-3" >
          <div className="card h-100 shadow">
            <img className="card-img-top flagimagesize"alt={`${item.name.common} flag`}  src={item.flags.png} />
            <div className={`card-body ${theme}`}>
              <h5 className={`${theme}`}>{item.name.official}</h5>
              <div className={`card-text ${theme}`}>
                <div>
                  <label className="bold-font">Common Name:</label>
                  <label>{item.name.common}</label>
                </div>
                <div>
                  <label className="bold-font">Capital:</label>
                  <label>{item.capital}</label>
                </div>
                <div>
                  <label className="bold-font">Region:</label>
                  <label>{item.region}</label>
                </div>
                <div>
                  <label className="bold-font">Sub Region:</label>
                  <label>{item.subregion}</label>
                </div>
                <div>
                  <label className="bold-font">Continent:</label>
                  <label>{item.continents}</label>
                  </div>
                <p>
                  <label className="bold-font">Geography:</label>
                  <label>
                    lat:{item.latlng[0]},lng:{item.latlng[1]}
                  </label>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
