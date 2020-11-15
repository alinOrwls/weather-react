
import React from "react";

export default function Weather () {

  let weatherData = {
    city: "Tokyo",
    date: "Saturday 11:45",
    description: "Mostly cloudy",
    imgURL: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    feelsLike: "20",
    humidity: "80"
  };

  return (
    <div className="Weather">
      <div className="card-body">
        <div className="search-form">
          <form className="mb-3">
            <div className="row">
              <div className="col-3">
                <input
                  type="search"
                  className="form-control"
                  placeholder="Enter your city"
                />
              </div>

              <div className="col-6">
                <button className="btn btn-primary">Search</button>
              </div>
            </div>
          </form>
        </div>
        <h2>
          {weatherData.city}
          <br />
        </h2>
        <img src={weatherData.imgURL} alt={weatherData.description} />
        <p>
          <strong>
            Last Updated:
            {weatherData.date}
          </strong>
        </p>
        <ul>
          <li>{weatherData.description}</li>
          <li> 18° | 13° </li>
          <li> Feels like {weatherData.feelsLike}° </li>
          <li> Humidity {weatherData.humidity}% </li>
        </ul>
      </div>
    </div>
  );
}

   
    
