// Store the URL to the JSON file into a variable
let requestURL = 'scripts/table-data.json';
// Create a new request to access the JSON file
let request = new XMLHttpRequest();
// Open the request using the JSON URL variable
request.open('GET', requestURL);
// Set the response type to JSON so the browser knows what type of file to expect
request.responseType = 'json';
// Send the request
request.send();
// When file is received - deal with the information
request.onload = function() {
  const planetRows = request.response;
  populatePlanets(planetRows);
}

// Create Table rows using the data
function populatePlanets(obj) {
  // Instantiate the table and template
  var tbody = document.querySelector("tbody");
  var template = document.querySelector('#planetrow');
  // Grab the JSON array data
  const planets = obj['planetdata'];
  // Loop through the array to add the content to the table
  for (let i = 0; i < planets.length; i++) {
    var myClone = template.content.cloneNode(true);
    var myTd = myClone.querySelectorAll("td");
    myTd[0].textContent = planets[i].planet;
    myTd[2].textContent = planets[i].diameter;
    myTd[1].textContent = planets[i].type;
    myTd[3].textContent = planets[i].day;
    myTd[4].textContent = planets[i].orbit;

    tbody.appendChild(myClone);
  }
}