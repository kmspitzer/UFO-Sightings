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


// Create event handlers for clicking the button
button.on("click", runEnter);

// Create the function to run for both events
function runEnter() {


  // Prevent the page from refreshing
  d3.event.preventDefault();

  var filteredData = tableData;

  var idList = ["datetime", "city", "state", "country", "shape"];

  for (var i = 0; i < idList.length; i++) {
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#" + idList[i]);

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    if (inputValue != "") {
      filteredData = filteredData.filter(sighting => sighting[idList[i]].toLowerCase() === inputValue.toLowerCase());
      inputElement.property("value", "");
    }
  }

  tbody.html("");

  if (filteredData.length === 0) {
      var row = tbody.append("tr");
      var cell = row.append("td");
      var td = d3.select("td");

      td.attr("colspan", "7");
      td.attr("class", "no-data-found");
      cell.text("No sightings found.");
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

}