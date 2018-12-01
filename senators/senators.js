import {senators} from "./Assets/senators.js";

////////////////////////////////////////// VARIABLES //////////////////////////////////////////

const senateData = senators.results[0].members;

const senatorWithPics = senateData.map(senator => {
  senator['img'] = `https://www.govtrack.us/data/photos/${senator.govtrack_id}-200px.jpeg`
  return senator
});
const senatorPic = document.querySelector(".senatorPic");
const stateMenu = document.getElementById("stateMenu");
const senatorInfo = document.querySelector(".senatorInfo");
let stateList = []
////////////////////////////////////////// FUNCTIONS //////////////////////////////////////////
senatorWithPics.forEach(senator => { //creates array of states and alphabetizes it.
  stateList.push(senator.state);
  stateList.sort();
});


// stateList.forEach(state => { //populates state dropdown menu, needs to be alphabetized and remove duplicates
//   let optionTag = document.createElement("option");
//   optionTag.setAttribute("id", state);
//   optionTag.textContent = state;
//   stateMenu.appendChild(optionTag);
//   const filteredList = senator.filter(state => state == senator.state);
//   console.log(filteredList);
  
//   // console.log(senator.state);
// }); 

function displaySenator(senator){//takes senator object and displays information on webpage, needs to be able to display 2 senators
    let imgItem = document.createElement("img");//need some way to clear info before adding new tags
    let textItem = document.createElement("p");
    imgItem.src = senator.img;
    textItem.textContent = `${senator.first_name} ${senator.last_name} from ${senator.state}.`;//potentially create way to turn postal code into full name.
    senatorPic.appendChild(imgItem);
    senatorInfo.appendChild(textItem);
}


function findSenator(senator) {//finds senator with matching state value to drop menu value, needs to be able to find multiple senators 
  let stateValue = document.getElementById("stateMenu").value;
  let senatorObject;
  for(let i = 0; i < senator.length; i ++){
    console.log(2);
    if(stateValue == senator[i].state){
      senatorObject = senator[i];
      break;
    }
  }
  displaySenator(senatorObject);//calls displaySenator function.
};


document.getElementById("stateMenu").addEventListener("change", function(){
  findSenator(senatorWithPics);
});//Looks for change in stateMenu dropdown, look into how this works

// console.log(stateList.sort());

console.log(senateData.filter(senator => senator.state === 'UT'));