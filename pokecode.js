import {pokemon} from './assets/pokemon.js';


let pokeImg = document.querySelector('.pokePic');
let pokeName = document.querySelector('.cardBackName');
let pokeStatsText = document.querySelector('.pokeStats');

pokemon.forEach(pokemon => {
    let optionTag = document.createElement("option");
    //optionTag.setAttribute("id", pokemon.ename);
    optionTag.textContent = pokemon.ename;
    pokeMenu.appendChild(optionTag);
    // const filteredList = senator.filter(state => state == senator.state);
    // console.log(filteredList);
    
    // console.log(senator.state);
  });

function findPokemon(pokemon) { 
    let pokeValue = document.querySelector("#pokeMenu").value;
    let pokeObject;
    for(let i = 0; i < pokemon.length; i ++){//find better way to do this ie find and return object with correct ename
      if(pokeValue == pokemon[i].ename){
        pokeObject = pokemon[i];
        break;
      }
    }
    displayPokemon(pokeObject);//calls displaySenator function.
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



document.getElementById("pokeMenu").addEventListener("change", function(){
    findPokemon(pokemon);
  });


