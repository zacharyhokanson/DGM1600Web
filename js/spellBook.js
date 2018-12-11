import {spellData} from '../assets/5e-Spells.js';

// ////////////////////////////////////////////VARIABLES////////////////////////////////////////////
let cardContainer = document.querySelector('.cardsContainer');

let magicSchools = ['Abjuration', 'Conjuration', 'Divination', 'Enchantment', 'Evocation', 'Illusion', 'Necromancy', 'Transmutation'];

let abjurationButton = document.querySelector('.Abjuration')
let conjurationButton = document.querySelector('.Conjuration')
let divinationButton = document.querySelector('.Divination')
let enchantmentButton = document.querySelector('.Enchantment')
let evocationButton = document.querySelector('.Evocation')
let illusionButton = document.querySelector('.Illusion')
let necromancyButton = document.querySelector('.Necromancy')
let transmutationButton = document.querySelector('.Transmutation')
let allButton = document.querySelector('.All')



////////////////////////////////////////////FUNCTIONS////////////////////////////////////////////
const resetCards = () => {
  while (cardContainer.firstChild) {
    cardContainer.removeChild(cardContainer.firstChild);
  }
}


const generateCard = (element) => {
    // CREATE DIVS
    let cardBody = document.createElement('div')

    let fadeBody = document.createElement('div')

    let cardHead = document.createElement('div')

    let cardContent = document.createElement('div')
    
    //CREATE P's

    let spellName = document.createElement('p')
    
    let spellLevel = document.createElement('p')
  
    let spellSchool = document.createElement('p')

    let spellRange = document.createElement('p')

    let spellComponents = document.createElement('p')

    let spellDuration = document.createElement('p')

    let spellRitual = document.createElement('p')
    
    //ADD CLASSES
    cardBody.className = 'card'
    fadeBody.className = 'bodyFade'
    cardHead.className = 'cardHeader centerText headAnimation'
    cardContent.className = 'cardContent contentAnimation'
    
    spellName.className = 'headText'
    spellLevel.className = 'centerText margin5'
    spellSchool.className = 'centerText margin5'
    spellRange.className = 'centerText margin5'
    spellComponents.className = 'centerText margin5'
    spellDuration.className = 'centerText margin5'
    spellRitual.className = 'centerText margin5'

    //CREATE CARD STRUCTURE
    cardContainer.appendChild(cardBody)

    cardBody.appendChild(fadeBody)

    cardBody.appendChild(cardHead)
    cardHead.appendChild(spellName)

    cardBody.appendChild(cardContent)
    cardContent.appendChild(spellLevel)
    cardContent.appendChild(spellSchool)
    cardContent.appendChild(spellRange)
    cardContent.appendChild(spellComponents)
    cardContent.appendChild(spellDuration)
    cardContent.appendChild(spellRitual)

    //ADD TEXT
    spellName.textContent = element.name

    spellLevel.textContent = element.level
    spellSchool.textContent = element.school
    spellRange.textContent = element.range
    spellComponents.textContent = element.components
    spellDuration.textContent = element.duration
    spellRitual.textContent = element.ritual

      //ADD BACKGROUND COLOR
      switch(element.school){
        case 'Abjuration':
            fadeBody.classList.add('blue')
            break

        case 'Conjuration':
          fadeBody.classList.add('orange')
          break

        case 'Divination':
          fadeBody.classList.add('yellow')
          break

        case 'Enchantment':
          fadeBody.classList.add('pink')
          break

        case 'Evocation':
          fadeBody.classList.add('red')
          break

        case 'Illusion':
          fadeBody.classList.add('purple')
          break

        case 'Necromancy':
          fadeBody.classList.add('black')
          break

        case 'Transmutation':
          fadeBody.classList.add('green')
          break

      }


    cardBody.addEventListener( 'click', function() {
      cardHead.classList.toggle('isRaised')
      cardContent.classList.toggle('isRaised')
      cardContent.classList.toggle('isVisible')
      fadeBody.classList.toggle('isOpaque')
    })
    
};



spellData.forEach(spell =>{
  generateCard(spell)
})



////////////////////////////////////////////BUTTON LISTENERS////////////////////////////////////////////

abjurationButton.addEventListener('click', () => {
  resetCards()
  let schoolArray = spellData.filter(spell => spell.school === magicSchools[0])


  schoolArray.forEach(spell =>{
    generateCard(spell)
  })
});

conjurationButton.addEventListener('click', () => {
  resetCards()
  let schoolArray = spellData.filter(spell => spell.school === magicSchools[1])
  

  schoolArray.forEach(spell =>{
    generateCard(spell)
  })
});

divinationButton.addEventListener('click', () => {
  resetCards()
  let schoolArray = spellData.filter(spell => spell.school === magicSchools[2])
  

  schoolArray.forEach(spell =>{
    generateCard(spell)
  })
});

enchantmentButton.addEventListener('click', () => {
  resetCards()
  let schoolArray = spellData.filter(spell => spell.school === magicSchools[3])


  schoolArray.forEach(spell =>{
    generateCard(spell)
  })
});

evocationButton.addEventListener('click', () => {
  resetCards()
  let schoolArray = spellData.filter(spell => spell.school === magicSchools[4])


  schoolArray.forEach(spell =>{
    generateCard(spell)
  })
});

illusionButton.addEventListener('click', () => {
  resetCards()
  let schoolArray = spellData.filter(spell => spell.school === magicSchools[5])


  schoolArray.forEach(spell =>{
    generateCard(spell)
  })
});

necromancyButton.addEventListener('click', () => {
  resetCards()
  let schoolArray = spellData.filter(spell => spell.school === magicSchools[6])


  schoolArray.forEach(spell =>{
    generateCard(spell)
  })
});

transmutationButton.addEventListener('click', () => {
  resetCards()
  let schoolArray = spellData.filter(spell => spell.school === magicSchools[7])


  schoolArray.forEach(spell =>{
    generateCard(spell)
  })
});

allButton.addEventListener('click', () => {
  resetCards()
  spellData.forEach(spell =>{
    generateCard(spell)
  })
});
