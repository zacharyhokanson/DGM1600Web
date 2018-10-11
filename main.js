// var charName = document.querySelector("#characterName");
// var hairColor = document.querySelector("#hairColor");
// var eyeColor = document.querySelector("#eyeColor");

fetch('https://swapi.co/api/films/')
.then(function(response) {
  return response.json();
})
.then(function(myJson) {
  // myJson.results.forEach(function(element){
  //   console.log(element);
  // });

  myJson.results.forEach( (film) => {
    film.characters.forEach( (character) => {
      fetch(character)
      .then(function (response){
        return response.json()
      })
      .then(function (characterValue){
        console.log(characterValue.name)
      })
    })
    // console.log(film.title)
  })
})