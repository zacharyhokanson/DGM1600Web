/////////////////////////////////////////////IMPORTS/////////////////////////////////////////////

import {monsters} from '/assets/5e-Monsters.js';

////////////////////////////////////////////VARIABLES////////////////////////////////////////////
let monsterImg = document.querySelector('.monsterPic');
let monsterName = document.querySelector('.monsterName');
let monsterStatsText = document.querySelector('.monsterStats');
let monsterMenu = document.querySelector('.monsterMenu')

////////////////////////////////////////////FUNCTIONS////////////////////////////////////////////
monsters.forEach(monster => {
    let optionTag = document.createElement("option");
    optionTag.textContent = `${monster.name}`;
    optionTag.value = monster.name;
    monsterMenu.appendChild(optionTag);
  });

function findMonster(monster) { 
    let monsterValue = monsterMenu.value;
    console.log(monsterValue);
    let monsterObject;
    for(let i = 0; i < monster.length; i ++){
      if(monsterValue == monster[i].name){
        monsterObject = monster[i];
        break;
      }
    }
    displayMonster(monsterObject);
    console.log(monsterObject);
  };

function displayMonster(monsterElement){
    monsterImg.src = `img/monsters/${monsterElement.index} ${monsterElement.name}.jpg`;
    monsterName.textContent = monsterElement.name;
}



document.querySelector(".monsterMenu").addEventListener("change", function(){
    findMonster(monsters);
  });