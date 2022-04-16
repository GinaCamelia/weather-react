import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);

    function displayWeather(response) {
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
            icon: response.data.weather[0].icon,
        });
    }

function search() {
      const key = "baad171896e0c3b36f831a6990f30812";
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
      axios.get(url).then(displayWeather);  
}
function handleSubmit(event) {
  event.preventDefault();
  search();
}
function handleCityChange(event) {
  setCity(event.target.value);
}

    if (weatherData.ready) {
        return (
            <div className="Weather">
                <div className="border">
                <div className="input-group">
                    <form onSubmit = {handleSubmit} id="search-form">
                         <input
                           type="search"
                           class="form-control mb-1"
                           id="search-text-input"
                           placeholder="Enter a city"
                           onChange = {handleCityChange}
                           aria-label="Enter a city"
                           aria-describedby="basic-addon2"
                         />
                       <div className="input-group-append"> 
                        <button 
                           type="Submit" 
                           value="Search" 
                           className="btn btn-outline-secondary primary">Search</button>
                        <button
                        type="button" 
                        className="btn btn-outline-secondary second">Location</button>
                       </div>
                    </form>
                </div>
                <WeatherInfo data={weatherData} />
            </div>
            <br />
            </div>
            );
        } else {
          search();
        }
      }