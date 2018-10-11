var charName = document.querySelector("#characterName");
var hairColor = document.querySelector("#hairColor");
var eyeColor = document.querySelector("#eyeColor");

fetch('https://swapi.co/api/people/1/')
.then(function(response) {
  return response.json();
})
.then(function(myJson) {
    charName.textContent = myJson.name;
    hairColor.textContent = "Hair Color: " + myJson.hair_color;
    eyeColor.textContent = "Eye Color: " + myJson.eye_color;
  console.log(myJson.name);
});
//Test