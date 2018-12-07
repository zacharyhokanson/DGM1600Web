/////////////////////////////////////////////IMPORTS/////////////////////////////////////////////
import {pokes} from './assets/pokemon2.js';

////////////////////////////////////////////VARIABLES////////////////////////////////////////////
const Regions = {
    Kanto:[0, 150],
    Johto:[151, 250],
    Hoenn:[251, 385],
    Sinnoh:[386, 492],
    Unova:[493, 648],
    Kalos:[649, 717],
}


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



const imgId = (n) => {
    if(n.id < 10){
        // console.log(`00${pokes[i].id}`);
        return `img/Pokemon/00${n.id}${n.name}.png`
    }else if (n.id < 100){
        // console.log(`0${pokes[i].id}`);
        return `img/Pokemon/0${n.id}${n.name}.png`
    }else{
        // console.log(`${pokes[i].id}`);
        return `img/Pokemon/${n.id}${n.name}.png`
    }
}




const generateCard = (element) => {
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

    cardContainer.appendChild(flipCard);
    flipCard.appendChild(cardFront);
    flipCard.appendChild(cardBack);
    cardFront.appendChild(img);
    cardFront.appendChild(pokeName);
    cardBack.appendChild(pokeStats);

    img.src = imgId(element);
    pokeName.textContent = element.name;
    pokeName.className = 'has-text-centered';

    pokeStats.textContent = element.description;
    pokeStats.className = 'has-text-centered';

    return cardContainer;
};

// pokes.forEach(element  => {//Arrow Function that loops through array
//     // console.log(element.name);
//     cardWrapper.appendChild(generateCard(element));
    
// });

for(let i = Regions.Johto[0]; i <= Regions.Johto[1]; i++){
    cardWrapper.appendChild(generateCard(pokes[i]));
}

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



// button.addEventListener('click', () => {
//     console.log(`Thanks for clicking`);
//     pokemon.push(newCard);
//     console.log(pokemon);
//     cardWrapper.appendChild(generateCard(newCard));

// });


// function Bird() {
//     this.name = "Albert";
//     this.color = "blue";
//     this.numLegs = 2;
//     // "this" inside the constructor always refers to the object being created
//   }
  
//   let blueBird = new Bird();
//   console.log(blueBird);



