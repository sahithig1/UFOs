// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");
function buildTable(data) {
    tbody.html("");
  
//Loop through each object in the data and append a row and cells for each value in row
  data.forEach((dataRow) => {
//append a row to the table
    let row = tbody.append("tr");
    //Loop through each row in the datarow and add each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
    });
  });
}