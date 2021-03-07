// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// YOUR CODE HERE!
tableData.forEach((ufoSighting) => {
    var row = tbody.append("tr");
    Object.values(ufoSighting).forEach(value => {    
      var cell = row.append("td");
      cell.text(value);
    });
  });


  // Getting a reference to the button on the page with the id property set to `click-me`
var button = d3.select("#filter-btn");

// Getting a reference to the input element on the page with the id property set to 'input-field'
var form = d3.select("#form");


// Create event handlers for clicking the button
button.on("click", runEnter);

// Create the function to run for both events
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputDate = d3.select("#datetime");

  // Get the value property of the input element
  var dateValue = inputDate.property("value");

  // Select the input element and get the raw HTML node
  var inputCity = d3.select("#city");

  // Get the value property of the input element
  var cityValue = inputCity.property("value");

  // Select the input element and get the raw HTML node
  var inputState = d3.select("#state");

  // Get the value property of the input element
  var stateValue = inputState.property("value");

  // Select the input element and get the raw HTML node
  var inputCountry = d3.select("#country");

  // Get the value property of the input element
  var countryValue = inputCountry.property("value");

    // Select the input element and get the raw HTML node
    var inputShape = d3.select("#shape");

    // Get the value property of the input element
    var shapeValue = inputShape.property("value");


  if (inputValue === "") {
    var filteredData = tableData;
  }
  else {
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
  }



  tbody.html("");

  if (filteredData.length === 0) {
      var row = tbody.append("tr");
      var cell = row.append("td");
      var td = d3.select("td");

      td.attr("colspan", "7");
      cell.text(`No sightings found for ${inputValue}.`)
  }
  else {
    filteredData.forEach((ufoSighting) => {
        var row = tbody.append("tr");
        Object.values(ufoSighting).forEach(value => {    
            var cell = row.append("td");
            cell.text(value);
        });
     });
  }
  inputElement.property("value", "");
}