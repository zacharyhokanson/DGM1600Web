var charName = document.querySelector("#characterName");
// var hairColor = document.querySelector("#hairColor");
// var eyeColor = document.querySelector("#eyeColor");

// fetch('https://swapi.co/api/films/')
// .then(function(response) {
//   return response.json();
// })
// .then(function(myJson) {
//   // myJson.results.forEach(function(element){
//   //   console.log(element);
//   // });

//   myJson.results.forEach( (film) => {
//     film.characters.forEach( (character) => {
//       fetch(character)
//       .then(function (response){
//         return response.json()
//       })
//       .then(function (characterValue){
//         console.log(characterValue.name)
//       })
//     })
//     // console.log(film.title)
//   })
// })

fetch("https://swapi.co/api/people/")
.then(function(response){
  return response.json();
})
.then(function(people){
    people.results.forEach((results) => {
      var ul = document.getElementById("characterName");
      var li = document.createElement("li");
      li.appendChild(document.createTextNode(results.name));
      ul.appendChild(li);
      // console.log(results.name)
      // charName.textContent = results.name;
    })
})
