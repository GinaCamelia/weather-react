import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
            <div className="container">
                <div className="row mt-5 mb-5">
                  <div className="col-sm-6">
                    <span className="circle" id="display-input">
                      <span className="day"></span>
                      <span>
                            <FormattedDate date={props.data.date} />
                        </span>
                      <span className="city">{props.data.city}</span> <br />
                      <WeatherTemperature celsius={props.data.temperature} />
                      <WeatherIcon code={props.data.icon} rel="noreferrer" />
                      <span className="description text-capitalize mt-1">{props.data.description}</span>
                    </span>
                  </div>
                  <div className="col-sm-6">
                    <span className="square">
                      <div className="col-sm">
                       Wind: <span className="wind">{Math.round(props.data.wind)} km/h</span>
                        <br />
                      </div>
                        <div className="col-sm">
                        Pressure: <span className="pressure">{Math.round(props.data.pressure)}mHg</span>
                              <br />
                              </div>
                      <div className="col-sm">
                      Humidity: <span className="humidity">{Math.round(props.data.humidity)}%</span>
                      <br />
                      </div>
                      <div className="col-sm">
                     Max-Temp: <span className="feels-like">{Math.round(props.data.MaxTemp)}ºC</span>
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