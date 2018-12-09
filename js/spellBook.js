import {spellData} from '../assets/5e-Spells.js';

////////////////////////////////////////////VARIABLES////////////////////////////////////////////
let cardWrapper = document.querySelector('.cardWrapper');

// let button = document.querySelector('#newCard')
let clearButton = document.querySelector('#clearCard');

let magicSchools = ['Abjuration', 'Conjuration', 'Divination', 'Enchantment', 'Evocation', 'Illusion', 'Necromancy', 'Transmutation'];

let buttonList = [];

let removeCards = () => {
    let removeDiv = document.querySelector(".cardWrapper");
    while (removeDiv.firstChild) {
        removeDiv.removeChild(removeDiv.firstChild);
    }
    //buttonList.forEach(button => button.classList.remove('current-button'))
}

spellData.forEach(element  => {//Arrow Function that loops through array
    // console.log(element.name);
    cardWrapper.appendChild(generateCard(element));
    
});

function generateCard(element){
    let spellName = document.createElement('p');
    let spellSchool = document.createElement('p');
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
    
    cardFront.appendChild(spellName);
    cardBack.appendChild(spellSchool);

    spellName.textContent = element.name;
    spellName.className = 'has-text-centered';

    spellSchool.textContent = element.school;
    spellSchool.className = 'has-text-centered';
    
    switch(element.school) {
        case 'Abjuration':
            cardBack.classList.add('abjuration');
            console.log('abj');
            break;

        default:
            break;

    };

    return cardContainer;
};

clearButton.addEventListener('click', () => {
    removeCards();

});