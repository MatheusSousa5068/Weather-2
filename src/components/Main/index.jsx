import React, { useEffect, useState } from "react";

import Modal from "../Modal";

import { openModal } from "../../utils/js/views/modal";
import axios from "axios";

export default function Main(props) {
    const [temp, setTemp] = useState(25);
    const [unit, setUnit] = useState("C");
    const [location, setLocation] = useState("PB, Brasil");
    const [cloud, setCloud] = useState("PB, Brasil");
    const [wind, setWind] = useState("25km/h");
    const [humidity, setHumidity] = useState("");

    const [mainCity, setMainCity] = useState("João Pessoa");

    const re = /^[a-zA-Z\s]*$/

    useEffect(() => {
        axios
            .get(
                `
        https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${mainCity}/today?unitGroup=metric&include=current&key=SMSLCV9DMP7FSRJX66WBSN4BU&contentType=json`
            )
            .then((response) => {
                let tempp = response.data.resolvedAddress.split(",");

                setTemp(response.data.days[0].temp.toFixed());

                setLocation(`${tempp[1]}, ${tempp[2] || ""}`);
                setCloud(`${response.data.days[0].cloudcover}%`);
                setWind(`${response.data.days[0].windspeed}km/h`);
                setHumidity(response.data.days[0].humidity);
            });

        const openModalButton = document.querySelector("#open-info-modal");

        openModalButton.addEventListener("click", () => {
            const modal = document.querySelector("#modal");
            openModal(modal);
        });

        document.addEventListener("keydown", submitHandler);
    }, []);

    const submitHandler = (event) => {
        if (event.key === "Enter" && document.activeElement.id == "search") {
            event.preventDefault();

            let city = document.getElementById("search").value;

            if (re.test(city)) {
                axios
                    .get(
                        `
            https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/today?unitGroup=metric&include=current&key=SMSLCV9DMP7FSRJX66WBSN4BU&contentType=json`
                    )
                    .then((response) => {
                        setTemp(response.data.days[0].temp.toFixed());
                        let tempp = response.data.resolvedAddress.split(",");
                        console.log(tempp[0]);

                        setMainCity(tempp[0]);

                        setTemp(response.data.days[0].temp.toFixed());

                        setLocation(`${tempp[1]}, ${tempp[2] || ""}`);
                        setCloud(`${response.data.days[0].cloudcover}%`);
                        setWind(`${response.data.days[0].windspeed}km/h`);
                        setHumidity(response.data.days[0].humidity);
                    });

                props.childToParent("F");
            } else {
                alert('Insira uma cidade válida')
            }
        }
    };

    return (
        <main>
            <div id="search-section">
                <form>
                    <input
                        type="text"
                        id="search"
                        name="search"
                        placeholder="Search"
                    />
                    <button type="button" id="search-btn">
                        &#xf002;
                    </button>
                </form>

                <div id="overlay"></div>

                <Modal />

                <div id="main-section">
                    <div id="info-section">
                        <button id="open-info-modal">&#xf129;</button>
                        <div id="last-update">
                            <div id="last-update-datetime"></div>
                            <button type="button" id="refresh">
                                <i className="fa-solid fa-arrows-rotate"></i>
                            </button>
                        </div>
                    </div>
                    <div id="main-info">
                        <div id="city">{mainCity.toUpperCase()}</div>
                        <div id="temperature">
                            {temp} º{unit}
                        </div>
                        <div id="change-temp-section">
                            ºC
                            <input type="checkbox" id="switch" />
                            <label
                                htmlFor="switch"
                                onClick={() => {
                                    if (unit == "C") {
                                        setUnit("F");

                                        setTemp((1.8 * temp + 32).toFixed());
                                    } else {
                                        setUnit("C");

                                        setTemp(((temp - 32) / 1.8).toFixed());
                                    }
                                }}
                            ></label>
                            ºF
                        </div>
                    </div>
                    <div id="sec-info">
                        <div id="statistics">
                            <div id="local">
                                <i className="fa-solid fa-location-dot"></i>
                                {location}
                            </div>
                            <div id="cloud">
                                <i className="fa-solid fa-cloud"></i>
                                {cloud}
                            </div>
                            <div id="wind">
                                <i className="fa-solid fa-wind"></i>
                                {wind}
                            </div>
                            <div id="humidity">
                                <i className="fa-solid fa-droplet"></i>
                                {humidity}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
