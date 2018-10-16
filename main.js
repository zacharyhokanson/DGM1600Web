import {films} from "/assets/films.js";

let filmsList = document.querySelector("#title");

films.forEach((film) => {
  let listItem = document.createAttribute("li");
  listItem.textContent = film.title;
  filmsList.appendChild(listItem);
  console.log(film.title);
})

// console.log(films);