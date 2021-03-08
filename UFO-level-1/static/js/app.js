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


// Create event handlers for clicking the button or pressing the enter key
button.on("click", runEnter);
form.on("submit",runEnter);

// Create the function to run for both events
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  //if (inputValue === "") {
  //  var filteredData = tableData;
  //}
 // else {
 //   var filteredData = tableData.filter(sighting => sighting.datetime.match(inputValue));
  //}

  if (inputValue === "") {
    var filteredData = tableData;
  } 
  else {

    var filteredData = tableData.filter(sighting => sighting.datetime.match(inputValue));
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