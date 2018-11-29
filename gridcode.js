/////////////////////////////////////////////IMPORTS/////////////////////////////////////////////
import {pokemon} from './assets/pokemon.js';

////////////////////////////////////////////VARIABLES////////////////////////////////////////////
let cardWrapper = document.querySelector('.cardWrapper');

let button = document.querySelector('#newCard')

// let newCard = {
//     "base": {
//         "Attack": 49, 
//         "Defense": 65, 
//         "HP": 45, 
//         "Sp.Atk": 49, 
//         "Sp.Def": 65, 
//         "Speed": 45
//     }, 
//     "cname": "\u83ca\u8349\u53f6", 
//     "ename": "Chikorita", 
//     "id": "152", 
//     "jname": "\u30c1\u30b3\u30ea\u30fc\u30bf", 
//     "skills": {}, 
//     "type": [
//         "\u8349"
//     ]
// }

let newCard = new Card();

////////////////////////////////////////////FUNCTIONS////////////////////////////////////////////
function Card() { //Object Constructor
    this.ename = 'Chikorita';
    this.id = '152';
    this.base = {
        "Attack": Math.random(), 
        "Defense": 65, 
        "HP": 45, 
        "Sp.Atk": 49, 
        "Sp.Def": 65, 
        "Speed": 45
    }
}

pokemon.forEach(element  => {//Arrow Function that loops through array
    console.log(element.ename);
    cardWrapper.appendChild(generateCard(element));
    
});

function generateCard(element){
    let img = document.createElement('img');
    let pokeName = document.createElement('p');
    let pokeStats = document.createElement('p');
    let cardContainer = document.createElement('div');//!!append and return this to create arrow function!!
    let flipCard = document.createElement('div');
    let cardFront = document.createElement('div');
    let cardBack = document.createElement('div');

    cardContainer.className = 'flipCardContainer';
    flipCard.className = 'flipCard';
    cardFront.className = 'flipCardFront';
    cardBack.className = 'flipCardBack';

    // cardWrapper.appendChild(cardContainer);
    cardContainer.appendChild(flipCard);
    flipCard.appendChild(cardFront);
    flipCard.appendChild(cardBack);
    cardFront.appendChild(img);
    cardFront.appendChild(pokeName);
    cardBack.appendChild(pokeStats);

    img.src = `img/${element.id}${element.ename}.png`;
    pokeName.textContent = element.ename;
    pokeName.className = 'has-text-centered';

    pokeStats.textContent = `HP: ${element.base.HP} Attack: ${element.base.Attack} Sp. Atk: ${element.base["Sp.Atk"]}`;
    pokeStats.className = 'has-text-centered';

    return cardContainer;
};

// const generateCard = (element) =>{
//     let img = document.createElement('img');
//     let pokeName = document.createElement('p');
//     let pokeStats = document.createElement('p');
//     let cardContainer = document.createElement('div');
//     let flipCard = document.createElement('div');
//     let cardFront = document.createElement('div');
//     let cardBack = document.createElement('div');

//     cardContainer.className = 'flipCardContainer';
//     flipCard.className = 'flipCard';
//     cardFront.className = 'flipCardFront';
//     cardBack.className = 'flipCardBack';

//     // cardWrapper.appendChild(cardContainer);
//     cardContainer.appendChild(flipCard);
//     flipCard.appendChild(cardFront);
//     flipCard.appendChild(cardBack);
//     cardFront.appendChild(img);
//     cardFront.appendChild(pokeName);
//     cardBack.appendChild(pokeStats);

//     img.src = `img/${element.id}${element.ename}.png`;
//     pokeName.textContent = element.ename;
//     pokeName.className = 'has-text-centered';

//     pokeStats.textContent = `HP: ${element.base.HP} Attack: ${element.base.Attack} Sp. Atk: ${element.base["Sp.Atk"]}`;
//     pokeStats.className = 'has-text-centered';
    
//     return cardContainer;
// }



button.addEventListener('click', () => {
    console.log(`Thanks for clicking`);
    pokemon.push(newCard);
    console.log(pokemon);
    cardWrapper.appendChild(generateCard(newCard));

});


// function Bird() {
//     this.name = "Albert";
//     this.color = "blue";
//     this.numLegs = 2;
//     // "this" inside the constructor always refers to the object being created
//   }
  
//   let blueBird = new Bird();
//   console.log(blueBird);