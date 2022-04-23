import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast() {
    return (
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                    <div className="card border-info">
                        <div className="card-header">Monday</div>
                            <div className="icon">
                                <WeatherIcon code="01d" size={32} />
                            </div>
                                <div className="card-body">
                                    <div className="card-text">
                                        <span className="temp-min">19°C | </span>
                                        <span className="temp-max">23°C </span>
                                    </div>
                                </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card border-info">
                        <div className="card-header">Monday</div>
                            <div className="icon">
                                <WeatherIcon code="50d" size={32} />
                            </div>
                                <div className="card-body">
                                    <div className="card-text">
                                        <span className="temp-min">19°C | </span>
                                        <span className="temp-max">23°C </span>
                                    </div>
                                </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card border-info">
                        <div className="card-header">Monday</div>
                            <div className="icon">
                                <WeatherIcon code="10d" size={32} />
                            </div>
                                <div className="card-body">
                                    <div className="card-text">
                                        <span className="temp-min">19°C | </span>
                                        <span className="temp-max">23°C </span>
                                    </div>
                                </div>
                    </div>
                </div>
            </div>
        </div>
    );
}