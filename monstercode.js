/////////////////////////////////////////////IMPORTS/////////////////////////////////////////////

import {monsters} from './assets/5e-Monsters.js';

////////////////////////////////////////////VARIABLES////////////////////////////////////////////
let monsterImg = document.querySelector('.monsterPic');
let monsterName = document.querySelector('.monsterName');
let monsterStatsText = document.querySelector('.monsterStats');
let monsterMenu = document.querySelector('.monsterMenu')

////////////////////////////////////////////FUNCTIONS////////////////////////////////////////////
monsters.forEach(monster => {
    let optionTag = document.createElement("option");
    //optionTag.setAttribute("id", pokemon.ename);
    optionTag.textContent = `${monster.name}`;
    optionTag.value = monster.name;
    monsterMenu.appendChild(optionTag);
  });

function findMonster(monster) { 
    let monsterValue = monsterMenu.value;
    console.log(monsterValue);
    let monsterObject;
    for(let i = 0; i < monster.length; i ++){//find better way to do this ie find and return object with correct ename
      if(monsterValue == monster[i].name){
        monsterObject = monster[i];
        break;
      }
    }
    displayMonster(monsterObject);
    console.log(monsterObject);
  };

function displayMonster(monsterElement){
    // let imgItem = document.createElement('img');
    // let textItem = document.createElement('p');
    // textItem.setAttribute('class', 'has-text-centered');
    // console.log(textItem);
    monsterImg.src = `img/${monsterElement.index} ${monsterElement.name}.jpg`;
    monsterName.textContent = monsterElement.name;
    // pokeStatsText.textContent = `Attack: ${pokeElement.base.Attack}`;
    // pokeImg.appendChild(imgItem);
    // pokeImg.appendChild(textItem);
    // console.log(imgItem);
}



document.querySelector(".monsterMenu").addEventListener("change", function(){
    findMonster(monsters);
  });


