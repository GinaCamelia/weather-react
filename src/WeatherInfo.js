import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
            <div class="container">
                <div class="row mt-5 mb-5">
                  <div class="col-sm-6">
                    <span class="circle" id="display-input">
                      <span class="day"></span> <br />
                      <span>
                            <FormattedDate date={props.data.date} />
                        </span>
                      <span class="city">{props.data.city}</span> <br />
                      <WeatherTemperature celsius={props.data.temperature} />
                      <WeatherIcon code={props.data.icon} rel="noreferrer" />
                      <span class="description text-capitalize">{props.data.description}</span>
                    </span>
                  </div>
                  <div class="col-sm-6">
                    <span class="square">
                      <div className="col-sm mb-1">
                      💨 Wind: <span class="wind">{Math.round(props.data.wind)} km/h</span>
                        <br />
                      </div>
                        <div className="col-sm mb-1">
                      🌪 Pressure: <span class="pressure">{Math.round(props.data.pressure)} mHg</span>
                              <br />
                              </div>
                      <div className="col-sm mb-1">
                      💧 Humidity: <span class="humidity">{Math.round(props.data.humidity)} %</span>
                      <br />
                      </div>
                      <div className="col-sm mb-5">
                     🌡 Feels-like: <span class="feels-like">{Math.round(props.data.MaxTemp)} ºC</span>
                      </div> 
                    </span>
                  </div>
                </div>
            </div>
              <div className="weather-forecast" id="forecast">
            </div>
            </div>
    );
}