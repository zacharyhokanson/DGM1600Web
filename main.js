fetch('https://swapi.co/api/people/1/')
.then(function(response) {
  return response.json();
})
.then(function(myJson) {
  console.log(JSON.stringify(myJson));
});