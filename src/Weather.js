import React from "react";
import axios from "axios";

export default function Weather(props) {
    function displayWeather(response) {
        //alert(`The weather in ${response.data.name} is ${response.data.main.temp}ºC`);
    }
    let key = "baad171896e0c3b36f831a6990f30812";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${key}&units=metric`;

    axios.get(url).then(displayWeather);
    return <h1>Hello from Weather</h1>
}