// from data.js
var tableData = data;



// declare variable - tell you to start at tbody
var body = d3.select("#ufo-table>tbody");
var text = d3.select("#datetime");
var button = d3.select("#filter-btn");
var form = d3.select(".form-group");
var state = d3.select("#state");


tableData.forEach(function (record) {
    //console.log(record);
    var row = body.append('tr');
    Object.entries(record).forEach(function ([key, value]) {
        //console.log(key,value);
        var col = row.append('td').text(value);
    });
});



// connect an event handler on click and on enter

text.on("change", runEnter);
button.on("click", runEnter);
form.on("submit", runEnter);

function runEnter(event) {
    var inputValue = document.getElementById("datetime").value
    var stateValue = document.getElementById("state").value
    console.log(inputValue);
    console.log(stateValue);
    // Prevent the page from refreshing
    
    d3.event.preventDefault();
    //define a variable to get the input

    if (inputValue !== "" && stateValue === ""){
        function filterD(ufo) {
            return ufo.datetime === inputValue;
        }
        var filteredData = tableData.filter(filterD);
        console.log("DataFilter");
        console.log(filteredData);
    }else if
     (stateValue !== "" && inputValue !== ""){
        function filterS(ufo) {
            return ufo.state === stateValue && ufo.datetime === inputValue ;
        }
        var filteredData = tableData.filter(filterS);
        console.log("StateFilter");
        console.log(filteredData);
    }
    else {
        function filterS(ufo) {
            return ufo.state === stateValue;
        }
        var filteredData = tableData.filter(filterS);
        console.log("StateFilter");
        console.log(filteredData);
    }


    body.html("");

    filteredData.forEach(function (record) {
        console.log(record);
        var row = body.append('tr');
        Object.entries(record).forEach(function ([key, value]) {
            console.log(key, value);
            var col = row.append('td').text(value);
        });
    });
    d3.event.preventDefault();
};
// connects to a function that will a) clear the data b) filter data c) display the data -> table