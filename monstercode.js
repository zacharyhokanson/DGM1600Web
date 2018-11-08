import {monsters} from './assets/5e-Monsters.js';

////////////////////////////////////////// VARIABLES //////////////////////////////////////////

let monsterImg = document.querySelector('.monsterPic');

////////////////////////////////////////// FUNCTIONS //////////////////////////////////////////

monsters.forEach(monster => {
    let optionTag = document.createElement("option");

    optionTag.textContent = monster.name;
    monsterMenu.appendChild(optionTag);
  });

function findMonster(monster) { 
    let monsterValue = document.querySelector("#monsterMenu").value;
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
    let imgItem = document.createElement('img');
    let textItem = document.createElement('p');
    textItem.setAttribute('class', 'has-text-centered');
    console.log(textItem);
    imgItem.src = `img/${monsterElement.index} ${monsterElement.name}.jpg`;
    textItem.textContent = monsterElement.name;
    monsterImg.appendChild(imgItem);
    monsterImg.appendChild(textItem);
    console.log(imgItem);
}



document.getElementById("monsterMenu").addEventListener("change", function(){
    findMonster(monsters);
  });



// for(let i = 0; i < monsters.length; i++){
//   console.log(i + 1, monsters[i].name);

// }