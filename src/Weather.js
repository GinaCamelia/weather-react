import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });


    function displayWeather(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            date: new Date (response.data.dt * 1000),
            temperature: response.data.main.temp,
            wind: response.data.wind.speed,
            pressure: response.data.main.pressure,
            humidity: response.data.main.humidity,
            MaxTemp: response.data.main.temp_max,
            city: response.data.name,
            description: response.data.weather[0].description,
            iconUrl: "https://ssl.gstatic.com/onebox/weather/64/fog.png",
        });
    }
    if (weatherData.ready) {
        return (
            <div className="Weather">
                <div className="border">
                <div className="input-group">
                    <form id="search-form">
                         <input
                           type="search"
                           class="form-control mb-1"
                           id="search-text-input"
                           placeholder="Enter a city"
                           aria-label="Enter a city"
                           aria-describedby="basic-addon2"
                         />
                       <div class="input-group-append"> 
                        <button 
                           type="Submit" 
                           value="Search" 
                           class="btn btn-outline-secondary primary">Search</button>
                        <button
                        type="button" 
                        class="btn btn-outline-secondary second">Location</button>
                       </div>
                    </form>
                </div>
          
              <div className="container">
                <div class="row mt-5 mb-5">
                  <div class="col-sm-6">
                    <span class="circle" id="display-input">
                      <span class="day"></span> <br />
                      <span>
                            <FormattedDate date={weatherData.date} />
                        </span>
                      <span class="city">{weatherData.city}</span> <br />
                      <span class="temp" id="temperature">{Math.round(weatherData.temperature)}</span>
                      <span class="units">℃</span>
                      <span>
                      <img src={weatherData.iconUrl} alt="" rel="noreferrer" id="icon" />
                      </span>
                      <span class="description text-capitalize">{weatherData.description}</span>
                    </span>
                  </div>
                  <div class="col-sm-6">
                    <span class="square">
                      <div className="col-sm mb-1">
                      💨 Wind: <span class="wind">{Math.round(weatherData.wind)} km/h</span>
                        <br />
                      </div>
                        <div className="col-sm mb-1">
                      🌪 Pressure: <span class="pressure">{Math.round(weatherData.pressure)} mHg</span>
                              <br />
                              </div>
                      <div className="col-sm mb-1">
                      💧 Humidity: <span class="humidity">{Math.round(weatherData.humidity)} %</span>
                      <br />
                      </div>
                      <div className="col-sm mb-5">
                     🌡 Feels-like: <span class="feels-like">{Math.round(weatherData.MaxTemp)} ºC</span>
                      </div> 
                    </span>
                  </div>
                </div>
            </div>
              <div className="weather-forecast" id="forecast">
            </div>
            </div>
            <br />
            </div>
            );
    } else {
      const key = "baad171896e0c3b36f831a6990f30812";
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${key}&units=metric`;
    axios.get(url).then(displayWeather);  
    }
}