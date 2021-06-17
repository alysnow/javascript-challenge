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
    var inputCity = d3.select("#city").property("value");
    var inputState = d3.select("#state").property("value");
    var inputCountry = d3.select("#country").property("value");
    var inputShape = d3.select("#shape").property("value");
    tbody.html("");

  // Use the form input to filter the data by datetime, city, state, country, shape
  var filteredData = tableData
  if (inputDate)
    filteredData = filteredData.filter(sighting => sighting.datetime == inputDate);
  if (inputCity)
    filteredData = filteredData.filter(sighting => sighting.city == inputCity);
  if (inputState)
    filteredData = filteredData.filter(sighting => sighting.state == inputState);
  if (inputCountry)
    filteredData = filteredData.filter(sighting => sighting.country == inputCountry);
  if (inputShape)
    filteredData = filteredData.filter(sighting => sighting.shape == inputShape);

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