
/////////////////////////////////////////////IMPORTS/////////////////////////////////////////////
import {pokemon} from './assets/pokemon.js';//test

////////////////////////////////////////////VARIABLES////////////////////////////////////////////
let pokeImg = document.querySelector('.pokePic');
let pokeName = document.querySelector('.pokeName');
let pokeStatsText = document.querySelector('.pokeStats');
let pokeMenu = document.querySelector(".pokeMenu")


////////////////////////////////////////////FUNCTIONS////////////////////////////////////////////

//NOTE: REFACTOR!!!

pokemon.forEach(pokemon => {
    let optionTag = document.createElement("option");
    //optionTag.setAttribute("id", pokemon.ename);
    optionTag.textContent = `${pokemon.id} ${pokemon.ename}`;
    optionTag.value = pokemon.ename;
    pokeMenu.appendChild(optionTag);
  });

function findPokemon(pokemon) { 
    let pokeValue = pokeMenu.value;
    console.log(pokeValue);
    let pokeObject;
    for(let i = 0; i < pokemon.length; i ++){//find better way to do this ie find and return object with correct ename
      if(pokeValue == pokemon[i].ename){
        pokeObject = pokemon[i];
        break;
      }
    }
    displayPokemon(pokeObject);
    console.log(pokeObject);
  };

function displayPokemon(pokeElement){
    // let imgItem = document.createElement('img');
    // let textItem = document.createElement('p');
    // textItem.setAttribute('class', 'has-text-centered');
    // console.log(textItem);
    pokeImg.src = `img/${pokeElement.id}${pokeElement.ename}.png`;
    pokeName.textContent = pokeElement.ename;
    pokeStatsText.textContent = `Attack: ${pokeElement.base.Attack}`;
    // pokeImg.appendChild(imgItem);
    // pokeImg.appendChild(textItem);
    // console.log(imgItem);
}



document.querySelector(".pokeMenu").addEventListener("change", function(){
    findPokemon(pokemon);
  });


