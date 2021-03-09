
//
//      JavaScript Challenge - Kate Spitzer (in collaboration with Rick Spitzer)
//
//      This script uses javascript to display data read from data.js displays the
//      data on a web page, and filters the data using user-entered filter
//      criteria.
//
//



// grab data from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// initially display all data on page
// loop through each javascript object in our
// data file and add a row of table data
tableData.forEach((ufoSighting) => {
    var row = tbody.append("tr");
    Object.values(ufoSighting).forEach(value => {    
      var cell = row.append("td");
      cell.text(value);
    });
});

// initialize our list of input fields
var idList = Object.keys(tableData[0]);

// set number of input fields
var numInputs = 5;

// Getting a reference to the button on the page
//  with the id property set to `filter-btn`
var button = d3.select("#filter-btn");


// Create event handler for clicking the button
button.on("click", runEnter);

// Create the function to run on-click
function runEnter() {


  // Prevent the page from refreshing
  d3.event.preventDefault();

  // start filtering with all data
  var filteredData = tableData;

  // loop through each input field for filtering
  for (var i = 0; i < numInputs; i++) {

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#" + idList[i]);

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    // if the user has entered a search value in this field,
    // use it to filter the data
    if (inputValue != "") {
        // convert both to lower case for comparison
        filteredData = filteredData.filter(sighting => sighting[idList[i]].toLowerCase() === inputValue.toLowerCase());

        // clear the input field
        inputElement.property("value", "");
    }
  }


  // clear the previous table data from the page
  tbody.html("");

  // if no data was found matching the search
  // criteria, display a no data found message
  if (filteredData.length === 0) {
      var row = tbody.append("tr");
      var cell = row.append("td");
      var td = d3.select("td");

      // no data found message should span the whole table,
      // and be centered
      td.attr("colspan", "7");
      td.attr("class", "no-data-found");
      cell.text("No sightings found.");
  }
  else {
    // matches were found.  display each row in the table
    filteredData.forEach((ufoSighting) => {
        var row = tbody.append("tr");
        Object.values(ufoSighting).forEach(value => {    
            var cell = row.append("td");
            cell.text(value);
        });
     });
  }

}