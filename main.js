var charName = document.querySelector("#characterName");

fetch('https://swapi.co/api/people/1/')
.then(function(response) {
  return response.json();
})
.then(function(myJson) {
    charName.textContent = myJson.name;
  console.log(myJson.name);
});