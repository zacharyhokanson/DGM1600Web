import {films} from "/assets/films.js";

let filmsList = document.querySelector("#filmTitles");

films.forEach((film) => {
  let listItem = document.createElement("li");
  listItem.textContent = film.title;
  filmsList.appendChild(listItem);
  console.log(film.title);
})

// console.log(films);