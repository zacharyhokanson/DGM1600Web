import {films} from "/assets/films.js";
import {people} from "/assets/people.js";

let filmsList = document.querySelector("#filmTitles");
let peopleList = document.querySelector("#peopleNames");

films.forEach((film) => {
  let listItem = document.createElement("li");
  listItem.textContent = film.title;
  filmsList.appendChild(listItem);
  console.log(film.title);
})

// people.forEach((person) => {
//   console.log(person.name);
// })
// // console.log(films);

function logPeople(){ //potentially use .slice instead
  for(let i = 0; i < 9; i++){
    let listItem = document.createElement("li");
    listItem.textContent = people[i].name;
    peopleList.appendChild(listItem);
    console.log(people[i].name);
  }
}
// console.log(people[0].name);
// logPeople();