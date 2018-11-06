import {senators} from "/assets/senators.js";

////////////////////////////////////////// VARIABLES //////////////////////////////////////////

const senateData = senators.results[0].members;

const senatorWithPics = senateData.map(senator => {
  senator['img'] = `https://www.govtrack.us/data/photos/${senator.govtrack_id}-200px.jpeg`
  return senator
});

const fillStateMenu = senatorWithPics;

const senatorPic = document.querySelector(".senatorPic");
const stateMenu = document.getElementById("stateMenu");
const senatorInfo = document.querySelector(".senatorInfo");

////////////////////////////////////////// FUNCTIONS //////////////////////////////////////////

fillStateMenu.forEach(senator => { //populates state dropdown menu, needs to be alphabetized and remove duplicates
  let optionTag = document.createElement("option");
  optionTag.setAttribute("id", senator.state);
  optionTag.textContent = senator.state;
  stateMenu.appendChild(optionTag);
  // const filteredList = senator.filter(state => state == senator.state);
  // console.log(filteredList);
  
  // console.log(senator.state);
});

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


const filteredList = senatorWithPics.filter(state => state == "UT")
console.log(filteredList);