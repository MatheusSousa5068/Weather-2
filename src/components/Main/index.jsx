import React, { useEffect, useState } from "react";

import Modal from "../Modal";

import { openModal } from "../../utils/js/views/modal";
import axios from "axios";

export default function Main() {
    const [temp, setTemp] = useState(25);
    const [unit, setUnit] = useState("C");
    const [mainCity, setMainCity] = useState("João Pessoa");

    useEffect(() => {
        axios
            .get(
                `
        https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${mainCity}/today?unitGroup=metric&include=current&key=SMSLCV9DMP7FSRJX66WBSN4BU&contentType=json`
            )
            .then((response) => {
                setTemp(response.data.days[0].temp.toFixed());
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

            axios
                .get(
                    `
            https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/today?unitGroup=metric&include=current&key=SMSLCV9DMP7FSRJX66WBSN4BU&contentType=json`
                )
                .then((response) => {
                    setTemp(response.data.days[0].temp.toFixed());
                    let tempp = response.data.resolvedAddress.split(',')
                    console.log(tempp[0])

                    setMainCity(tempp[0])
                });
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
                            </div>
                            <div id="cloud">
                                <i className="fa-solid fa-cloud"></i>
                            </div>
                            <div id="wind">
                                <i className="fa-solid fa-wind"></i>
                            </div>
                            <div id="humidity">
                                <i className="fa-solid fa-droplet"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
