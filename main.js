import {senators} from "/assets/senators.js";

const senateData = senators.results[0].members;

const senatorWithPics = senateData.map(senator => {
  senator['img'] = `https://www.govtrack.us/data/photos/${senator.govtrack_id}-200px.jpeg`
  return senator
});

const senatorPic = document.querySelector(".senatorPic");

// senatorWithPics.forEach(senator => {
//   let figureTag = document.createElement('figure');
//   let figureCaption = document.createElement('figcaption');
//   let listItem = document.createElement('li');
//   let imgItem = document.createElement('img');
//   figureCaption.textContent = `${senator.first_name} ${senator.last_name} from ${senator.state}`
//   imgItem.src = senator.img;
//   listItem.appendChild(figureTag);
//   figureTag.appendChild(imgItem);
//   senatorList.appendChild(listItem);
//   figureTag.appendChild(figureCaption);
  
//   console.log(senator.first_name);
//   console.log(senator.govtrack_id);
// })

// const votes = senateData.map(senator => senator.total_votes);
// const mostVotes = senateData.reduce((acc, senator) => {//look into more
//   return (acc.total_votes || 0) > senator.total_votes ? acc : senator;
// });

// console.log(`Male Senators: ${mSenate.length}`);
// console.log(`Female Senators: ${fSenate.length}`);

// // console.log(mostVotes);

// console.log(`The most votes ever cast was ${mostVotes.total_votes} by ${mostVotes.first_name} ${mostVotes.last_name} from ${mostVotes.state}.`);
// senatorWithPics.forEach(senator => {
//     let imgItem = document.createElement("img");
//     imgItem.src = senator.img;
//     senatorPic.appendChild(imgItem);
//     console.log(senator.img);
// })

function showSenator(senator, n){
    let imgItem = document.createElement("img");
    imgItem.src = senator[n].img;
    senatorPic.appendChild(imgItem);
    console.log(senator[n].img);
}

showSenator(senatorWithPics, 3);

