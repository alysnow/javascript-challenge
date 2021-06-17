// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Use d3 to update each cell's text with
// UFO data values (date, city, state, country, shape, duration, comments)
tableData.forEach(function(ufoObject) {
    var row = tbody.append("tr");
    Object.entries(ufoObject).forEach(function([key, value]) {
      // Append a cell to the row for each value
      // in the UFO data object
      var cell = row.append("td");
      cell.text(value);
    });
  });

  // Complete the event handler function for the form
  // Select the input element and get the value property of the input element
  function ClickButton(){
    var inputDate = d3.select("#datetime").property("value");
    tbody.html("");

  // Use the form input to filter the data by datetime, city, state, country, shape
  var filteredData = tableData
  if (inputDate)
    filteredData = filteredData.filter(sighting => sighting.datetime == inputDate);
    
   // Use d3 to update each cell's text with
  // UFO data values (date, city, state, country, shape, duration, comments)
  filteredData.forEach(function(ufoObject) {
    var row = tbody.append("tr");
    Object.entries(ufoObject).forEach(function([key, value]) {

      // Append a cell to the row for each value
      // in the UFO data object
      var cell = row.append("td");
      cell.text(value);
    });
  });
  }

  // Use d3 `.on` to attach a click handler for the filter table button
  d3.select("#filter-btn").on("click", ClickButton);