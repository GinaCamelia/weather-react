import React from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
    return (
    <div className="Weather">
        <div className="border">
        <div class="input-group">
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
  
      <div class="container">
        <div class="row mt-5 mb-5">
          <div class="col-sm-6">
            <span class="circle" id="display-input">
              <span class="day"></span> <br />
              <span class="city"></span><br />
              <span class="temp" id="temperature"></span>
              <span class="units">℃</span>
              <img src="" alt="" rel="noreferrer" id="icon" />
              <span class="description"></span>
            </span>
          </div>
          <div class="col-sm-6">
            <span class="square">
              <div class="col-sm mb-2">
              💨 Wind: <span class="wind"></span>
                <br />
              </div>
                <div class="col-sm mb-2">
              🌪 Pressure: <span class="pressure"></span>
                      <br />
                      </div>
              <div class="col-sm mb-2">
              💧 Humidity: <span class="humidity"></span>
              <br />
              </div>
              <div class="col-sm mb-5">
             🌡 Feels-like: <span class="feels-like"></span>
              </div> 
            </span>
          </div>
        </div>
    </div>
      <div class="weather-forecast" id="forecast">
    </div>
    </div>
    <br />
    </div>
    );
}









//let key = "baad171896e0c3b36f831a6990f30812";
    //let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${key}&units=metric`;

    //axios.get(url).then(displayWeather);