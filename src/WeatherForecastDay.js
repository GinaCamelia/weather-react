import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
    function maxTemperature() {
        let temperature = Math.round(props.data.temp.max);
        return `${temperature}°`;
    }

    function minTemperature() {
        let temperature = Math.round(props.data.temp.min);
        return `${temperature}°`;
    }

    function day() {
        let date= new Date(props.data.dt * 1000);
        let day = date.getDay();
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        return days[day];
    }

    return (
        <div className="WeatherForecastDay">
            <div className="card border-light bg-transparent mb-2">
                <div className="card-header bg-transparent">{day()}</div>
                    <div className="icon"><WeatherIcon code={props.data.weather[0].icon} size={32} color="#347474"/></div>
                                <div className="card-body bg-transparent">
                                    <div className="card-text bg-transparent">
                                        <span className="temp-max">{maxTemperature()} | </span>
                                        <span className="temp-min">{minTemperature()} </span>
                                    </div>
                                </div>
                            </div>
                       </div>
        );
    }