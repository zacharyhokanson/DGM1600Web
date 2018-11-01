import {senators} from "/assets/senators.js";

const senateData = senators.results[0].members;

const mSenate = senateData.filter(senator => senator.gender === "M");
const fSenate = senateData.filter(senator => senator.gender === "F");

console.log("Male Senators: " + mSenate.length);
console.log("Female Senators: " + fSenate.length);
