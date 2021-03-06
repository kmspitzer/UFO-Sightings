// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// YOUR CODE HERE!
data.forEach((ufoSighting) => {
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });