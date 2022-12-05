import { cities } from "./utils/cities.js";

/*
esse código serve pra pegar inserir o array no local storage caso ele n exista
caso exista, n faz nada

import { salve } from './teste.js'

if (localStorage.getItem('teste')) {
    // pass
}
else {
    localStorage.setItem('teste', salve);
}
*/

import { createCard} from "./views/cards.js";
import { getWeather, updateData } from "./views/mainCard.js";
import { openModal, closeModal } from "./views/modal.js";
import { changeTemp } from "./utils/changeTemp.js";


const searchBtn = document.getElementById("search-btn");

const openModalButton = document.querySelector('#open-info-modal');
const closeModalButton = document.querySelector('#close-info-modal')

const refreshIcon = document.getElementById("refresh");

const switchTempButton = document.querySelector('#switch');

async function loadCards() {
    cities.map((city, index) => {
        createCard(city,index)
    });
    // for (var i = 0; i < 4; i++){
    //     createCard(cities[i],i)
        
    // }
}

// Listeners
searchBtn.addEventListener("click", getWeather);


document.addEventListener("keydown", function (event) {
    if (event.key == "Enter") {
        getWeather();
    }
});

openModalButton.addEventListener('click', () => {
    const modal = document.querySelector('#modal')
    openModal(modal)
})

closeModalButton.addEventListener('click', () => {
    const modal = document.querySelector('#modal')
    closeModal(modal)
})

refreshIcon.addEventListener("click", async () => {
    updateData()
});

switchTempButton.addEventListener("click", () => {
    if (switchTempButton.checked) {
        changeTemp()
    } else {
        getWeather()
    }
})

// Function calls
loadCards();
getWeather();





// const closeBtn0 = document.getElementById("close-btn0");
// console.log(closeBtn0)
// closeBtn0.addEventListener("click",deleteCard(0));


