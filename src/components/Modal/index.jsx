import React, { useEffect } from 'react'

import { closeModal } from '../../utils/js/views/modal'

export default function Modal() {
    useEffect(() => {
        const closeModalButton = document.querySelector('#close-info-modal')
    
        closeModalButton.addEventListener('click', () => {
            const modal = document.querySelector('#modal')
            closeModal(modal)
        })
    }, [])

    

    return (
        <>
            <div className="modal" id="modal">
                <div className="modal-header">
                    <button id="close-info-modal">&times;</button>
                </div>
                <div className="modal-body">
                <b>WEATHER ME</b> is a website created with the purpose of making it easier for you to search the weather conditions of cities all around the globe by presenting them on a clean and simple format.<br />
                <div id="spaced-info">
                        Just type the city of your choice in the input label above the main section and you'll have it. Quick and easy.<br />
                        The <i className="fa-solid fa-location-dot"></i> icon refers to the region where the city is located.<br />
                        The <i className="fa-solid fa-cloud"></i> icon refers to the cloud cover percentage.<br />
                        The <i className="fa-solid fa-wind"></i> icon refers to the wind speed.<br />
                        The <i className="fa-solid fa-droplet"></i> icon refers to the humidity percentage.<br /> 
                </div>
                    You can always try to refresh the informations to receive their more recent status, as you can also check the local hour of their last update. 
                </div>
            </div>
        </>
        
    )
}