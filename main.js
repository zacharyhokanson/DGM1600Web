import {senators} from "/assets/senators.js";

const senateData = senators.results[0].members;

const senatorWithPics = senateData.map(senator => {
  senator['img'] = `https://www.govtrack.us/data/photos/${senator.govtrack_id}-200px.jpeg`
  return senator
});

const fillStateMenu = senatorWithPics;

const senatorPic = document.querySelector(".senatorPic");
const stateMenu = document.getElementById("stateMenu");


fillStateMenu.forEach(senator => { //populates state dropdown menu
  let optionTag = document.createElement("option");
  optionTag.setAttribute("id", senator.state);
  optionTag.textContent = senator.state;
  stateMenu.appendChild(optionTag);
  
  // console.log(senator.state);
});

// function showSenator(senator, n){
//     let imgItem = document.createElement("img");
//     imgItem.src = senator[n].img;
//     senatorPic.appendChild(imgItem);
//     // console.log(senator[n].img);
// }

// showSenator(senatorWithPics, 3);

function run(senator) {
  let n = document.getElementById("stateMenu").value;
};

document.getElementById("stateMenu").addEventListener("change", function(){
  run(senatorWithPics);
});//Looks for change in stateMenu dropdown, look into how this works
