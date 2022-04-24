import React, { useState } from "react";

export default function WeatherTemperature(props) {
    const [unit, setUnit] = useState ("celsius");
    function convertToFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }
    function convertToCelsius (event) {
        event.preventDefault();
        setUnit("celsius");
    }
    function fahrenheit() {
        return (props.celsius * 9/5) + 32;
    }

    if (unit === "celsius") {
    return (
        <div className="WeatherTemperature">
            <span className="temp" id="temperature">{Math.round(props.celsius)}</span>
            <span className="units"> ºC | <a href="/" onClick={convertToFahrenheit} className="units text-decoration-none">ºF </a> </span>
        </div>
    );
    } else {
        return (
            <div className="WeatherTemperature">
                <span className="temp" id="temperature">{Math.round(fahrenheit())}</span>
                <span className="units"> <a href="/" onClick={convertToCelsius} className="units text-decoration-none" > ºC  </a>| ºF </span>
            </div>
        );
    }
}