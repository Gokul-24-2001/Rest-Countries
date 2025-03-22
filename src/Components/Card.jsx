import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
//
function card({ country }) {
  return (
    <div className="row">
      {country.map((item, index) => (
        <div className="col-md-4  col-lg-3 col-sm-6 mb-3" >
          <div key={"country" + index} className="card h-100 shadow">
            <img className="card-img-top flagimagesize" src={item.flags.png} />
            <div className="card-body">
              <h5 className="card-title">{item.name.official}</h5>
              <div className="card-text">
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

export default card;
