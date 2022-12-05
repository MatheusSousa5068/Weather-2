import React, { useEffect, useState } from 'react'

import Modal from '../Modal'

import { openModal } from '../../utils/js/views/modal'

export default function Main() {
    const [temp, setTemp] = useState(25)
    const [unit, setUnit] = useState('C')

    


    useEffect(() => {
        const openModalButton = document.querySelector('#open-info-modal');


        openModalButton.addEventListener('click', () => {
            const modal = document.querySelector('#modal')
            openModal(modal)
        })
    }, [])

    

    return (
        <main>
            <div id="search-section">
                <div>
                    <input type="text" id="search" name="search" placeholder="Search" />
                    <button type="button" id="search-btn">&#xf002;</button>
                </div>

                
            <div id="overlay"></div>

            <Modal />

            <div id="main-section">
            <div id="info-section">
                <button id="open-info-modal" >&#xf129;</button>
                <div id="last-update">
                    <div id="last-update-datetime"></div>
                    <button type="button" id="refresh"><i className="fa-solid fa-arrows-rotate"></i></button>
                </div>
            </div>
            <div id="main-info">
                <div id="city">JOÃO PESSOA
                </div>
                <div id="temperature">
                    {temp} º{unit}
                </div>
                <div id="change-temp-section">
                    ºC
                    <input type="checkbox" id="switch" /><label htmlFor="switch" onClick={() => {
                        if (unit == 'C') {
                            setUnit('F')

                            setTemp(((1.8 * temp) + 32).toFixed());
                        } else {
                            setUnit('C')

                            setTemp(((temp - 32) / 1.8).toFixed())
                        }
                    }}></label>
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


        <div id="favcities-section">
            <div id="cities-container">
                
            </div>
        </div>
        </main>
        
    )
}