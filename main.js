import {senators} from "/assets/senators.js";

const senateData = senators.results[0].members;

const mSenate = senateData.filter(senator => senator.gender === "M");
const fSenate = senateData.filter(senator => senator.gender === "F");

const senatorWithPics = senateData.map(senator => {
  senator['img'] = `https://www.govtrack.us/data/photos/${senator.govtrack_id}-200px.jpeg`
  return senator
});

const senatorList = document.querySelector(".senatorList");

senatorWithPics.forEach(senator => {
  let listItem = document.createElement('li');
  let imgItem = document.createElement('img');
  imgItem.src = senator.img;
  listItem.appendChild(imgItem);
  senatorList.appendChild(listItem);
  console.log(senator.first_name);
  console.log(senator.govtrack_id);
})

const votes = senateData.map(senator => senator.total_votes);
const mostVotes = senateData.reduce((acc, senator) => {//look into more
  return (acc.total_votes || 0) > senator.total_votes ? acc : senator;
});

console.log(`Male Senators: ${mSenate.length}`);
console.log(`Female Senators: ${fSenate.length}`);

// console.log(mostVotes);

console.log(`The most votes ever cast was ${mostVotes.total_votes} by ${mostVotes.first_name} ${mostVotes.last_name} from ${mostVotes.state}.`);
