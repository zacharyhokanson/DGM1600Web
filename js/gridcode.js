/////////////////////////////////////////////IMPORTS/////////////////////////////////////////////
import {pokes} from '../assets/pokemon2.js';

////////////////////////////////////////////VARIABLES////////////////////////////////////////////
const Regions = {
    Kanto:[0, 150],
    Johto:[151, 250],
    Hoenn:[251, 385],
    Sinnoh:[386, 492],
    Unova:[493, 648],
    Kalos:[649, 717],
}


let cardWrapper = document.querySelector('.cardWrapper')

//button variables
let kantoButton = document.querySelector('.kanto')
let johtoButton = document.querySelector('.johto')
let hoennButton = document.querySelector('.hoenn')
let sinnohButton = document.querySelector('.sinnoh')
let unovaButton = document.querySelector('.unova')
let kalosButton = document.querySelector('.kalos')
let allButton = document.querySelector('.allRegions')
let newButton = document.querySelector('.newCard')


let cardTwo = new Card();

////////////////////////////////////////////FUNCTIONS////////////////////////////////////////////
function Card() { //Object Constructor
    this.name = 'Chikorita'
    this.id = '152'
    this.description = "A strange seed was planted on its back at birth. The plant sprouts and grows with this POKéMON."
    this.types = [
        "TEST"
      ]
}

const start = () => {
    selectRegion('Johto')
}

const imgId = (n) => {
    if(n.id < 10){
        return `img/pokemon/00${n.id}${n.name}.png`
    }else if (n.id < 100){
        return `img/pokemon/0${n.id}${n.name}.png`
    }else{
        return `img/pokemon/${n.id}${n.name}.png`
    }
}

const pokeTypeString = (poke) => {
    if(poke.types.length == 2){
        return `${poke.types[0].toUpperCase()} | ${poke.types[1].toUpperCase()}`
    }else{
        return `${poke.types[0].toUpperCase()}`
    }
    
    
}


const generateCard = (element) => { 
    let img = document.createElement('img')
    let pokeName = document.createElement('p')
    let pokeType = document.createElement('p')
    let cardContainer = document.createElement('div')
    let flipCard = document.createElement('div')
    let cardFront = document.createElement('div')
    let cardBack = document.createElement('div')
    let pokeDescr = document.createElement('div')

    cardContainer.className = 'flipCardContainer'
    flipCard.className = 'flipCard'
    cardFront.className = 'flipCardFront'
    cardBack.className = 'flipCardBack'

    cardContainer.appendChild(flipCard)
    flipCard.appendChild(cardFront)
    flipCard.appendChild(cardBack)
    cardFront.appendChild(img)
    cardFront.appendChild(pokeName)
    cardBack.appendChild(pokeType)
    cardBack.appendChild(pokeDescr)

    img.src = imgId(element)
    pokeName.textContent = element.name
    pokeName.className = 'has-text-centered'

    pokeType.textContent = pokeTypeString(element)
    pokeType.className = 'has-text-centered'

    pokeDescr.textContent = element.description
    pokeDescr.className = 'has-text-centered textMargin'
    return cardContainer
};

const resetCards = () => {
    while (cardWrapper.firstChild) {
        cardWrapper.removeChild(cardWrapper.firstChild);
    }
}


const selectRegion = (region) => {
    switch(region){
        case 'Kanto':

            for(let i = Regions.Kanto[0]; i <= Regions.Kanto[1]; i++){
                cardWrapper.appendChild(generateCard(pokes[i]))
            }
                break
    
        case 'Johto':

            for(let i = Regions.Johto[0]; i <= Regions.Johto[1]; i++){
                cardWrapper.appendChild(generateCard(pokes[i]))
            }
                break

        case 'Hoenn':

            for(let i = Regions.Hoenn[0]; i <= Regions.Hoenn[1]; i++){
                cardWrapper.appendChild(generateCard(pokes[i]))
            }
                break


        case 'Sinnoh':

            for(let i = Regions.Sinnoh[0]; i <= Regions.Sinnoh[1]; i++){
                cardWrapper.appendChild(generateCard(pokes[i]))
            }
                break

        case 'Unova':

            for(let i = Regions.Unova[0]; i <= Regions.Unova[1]; i++){
                cardWrapper.appendChild(generateCard(pokes[i]))
            }
                break

        case 'Kalos':

            for(let i = Regions.Kalos[0]; i <= Regions.Kalos[1]; i++){
                cardWrapper.appendChild(generateCard(pokes[i]))
            }
                break
    
        case 'All':

            for(let i = Regions.Kanto[0]; i <= Regions.Kalos[1]; i++){
                cardWrapper.appendChild(generateCard(pokes[i]))
            }
                break
    
    }






    
}

////////////////////////////////////////////BUTTON LISTENERS////////////////////////////////////////////
kantoButton.addEventListener('click', () => {
    resetCards()
    selectRegion('Kanto')
});

johtoButton.addEventListener('click', () => {
    resetCards()
    selectRegion('Johto')
});

hoennButton.addEventListener('click', () => {
    resetCards()
    selectRegion('Hoenn')
});

sinnohButton.addEventListener('click', () => {
    resetCards()
    selectRegion('Sinnoh')
});

unovaButton.addEventListener('click', () => {
    resetCards()
    selectRegion('Unova')
});

kalosButton.addEventListener('click', () => {
    resetCards()
    selectRegion('Kalos')
});

allButton.addEventListener('click', () => {
    resetCards()
    selectRegion('All')
});

newButton.addEventListener('click', () => {
    resetCards()
    cardWrapper.appendChild(generateCard(cardTwo))
});

////////////////////////////////////////////START////////////////////////////////////////////
start()







