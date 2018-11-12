/////////////////////////////////////////////IMPORTS/////////////////////////////////////////////
import {pokemon} from './assets/pokemon.js';

////////////////////////////////////////////VARIABLES////////////////////////////////////////////
let pageWrapper = document.querySelector('.pageWrapper');

////////////////////////////////////////////FUNCTIONS////////////////////////////////////////////
pokemon.forEach(element  => {
    console.log(element.ename);
    
    let img = document.createElement('img');
    let pokeName = document.createElement('p');
    let pokeStats = document.createElement('p');
    let cardContainer = document.createElement('div');
    let flipCard = document.createElement('div');
    let cardFront = document.createElement('div');
    let cardBack = document.createElement('div');

    cardContainer.className = 'flipCardContainer';
    flipCard.className = 'flipCard';
    cardFront.className = 'flipCardFront';
    cardBack.className = 'flipCardBack';

    pageWrapper.appendChild(cardContainer);
    cardContainer.appendChild(flipCard);
    flipCard.appendChild(cardFront);
    flipCard.appendChild(cardBack);
    cardFront.appendChild(img);
    cardFront.appendChild(pokeName);
    cardBack.appendChild(pokeStats);

    img.src = `img/${element.id}${element.ename}.png`;
    pokeName.textContent = element.ename;
    pokeName.className = 'has-text-centered';

    pokeStats.textContent = `Attack: ${element.base.Attack}`;
    pokeStats.className = 'has-text-centered';

    
});