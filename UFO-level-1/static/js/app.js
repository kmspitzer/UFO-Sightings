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


// Getting a reference to the button on the page
// with the id property set to `filter-btn`
var button = d3.select("#filter-btn");

// Getting a reference to the form in order to
// listen for the submit
var form = d3.select("#form");


// Create event handlers for clicking the
// button or pressing the enter key
button.on("click", runEnter);
form.on("submit", runEnter);

// Create the function to run for both events
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    // if the user does not enter any search criteria,
    // display all the data
    if (inputValue === "") {
      var filteredData = tableData;
    } 
    else {
      // user has entered a date.  filter the data
      var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
    }


    // clear the previous table from the page
    tbody.html("");

    // if the filter produced no matches, add a
    // no data found message to the table
    if (filteredData.length === 0) {
        var row = tbody.append("tr");
        var cell = row.append("td");
        var td = d3.select("td");

        // no data found message should span entire
        // table width and be centered
        td.attr("colspan", "7");
        td.attr("class", "no-data-found")
        cell.text(`No sightings found for ${inputValue}.`);
    }
    else {
      // matches found -- display each row in the table
      filteredData.forEach((ufoSighting) => {
          var row = tbody.append("tr");
          Object.values(ufoSighting).forEach(value => {    
              var cell = row.append("td");
              cell.text(value);
          });
      });
    }
    // clear the input field
    inputElement.property("value", "");
}