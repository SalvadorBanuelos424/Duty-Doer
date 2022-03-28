// localStorage is a property that allows JavaScript sites to save key-value pairs in a web browser with no expiration date

// This process will allow JavaScript to store objects(keys-value)
// <button class="button9"> will be used to execute an event
var b9 = document.querySelector("#button9");

// JavaScript stores an objects' properties in pairs, key-value, this assigned keys' identifier is named "notes"
area9.value = localStorage.getItem("notes");

// When <button class="button9"> is clicked, it will execute the next event...
b9.addEventListener("click", event => {
    
  // ...passing the keys' name to the value, the value being a string value in <textarea class="area9">
  localStorage.setItem("notes", area9.value);
});


// The process will replicate throughout all textareas for all work-hours
var b10 = document.querySelector("#button10");
area10.value = localStorage.getItem("notes2");
b10.addEventListener("click", event => {
  localStorage.setItem("notes2", area10.value);
});

var b11 = document.querySelector("#button11");
area11.value = localStorage.getItem("notes3");
b11.addEventListener("click", event => {
  localStorage.setItem("notes3", area11.value);
});

var b12 = document.querySelector("#button12");
area12.value = localStorage.getItem("notes4");
b12.addEventListener("click", event => {
  localStorage.setItem("notes4", area12.value);
});

var b1 = document.querySelector("#button1");
area1.value = localStorage.getItem("notes5");
b1.addEventListener("click", event => {
  localStorage.setItem("notes5", area1.value);
});

var b2 = document.querySelector("#button2");
area2.value = localStorage.getItem("notes6");
b2.addEventListener("click", event => {
  localStorage.setItem("notes6", area2.value);
});

var b3 = document.querySelector("#button3");
area3.value = localStorage.getItem("notes7");
b3.addEventListener("click", event => {
  localStorage.setItem("notes7", area3.value);
});

var b4 = document.querySelector("#button4");
area4.value = localStorage.getItem("notes8");
b4.addEventListener("click", event => {
  localStorage.setItem("notes8", area4.value);
});

var b5 = document.querySelector("#button5");
area5.value = localStorage.getItem("notes9");
b5.addEventListener("click", event => {
  localStorage.setItem("notes9", area5.value);
});


// Next parse hours into integers using moment.js, color coordinate rows by time of day [past] [present] & [future] 

// Element divs will be targeted [<div class="row">]
const rows = document.getElementsByClassName("row");

// turn the current hour into an integer
let currentHour = parseInt(moment().format('H'));

// create an array from rows array(<div class="row">) 
Array.from(rows).forEach(row => {
  let

  // create an array using integers [id="#"] from <div class="row">   
  rowIdString = row.id,
    rowHour;
  if (rowIdString) {
    rowHour = parseInt(rowIdString);
  }

  // Compares row-id integer to current hour integer in order to color coordinate rows by time of day [past] [present] & [future]
  if (rowHour) {

    // If the current hour(integer) equals row-id(integer), color is red to represent the current hour
    if (currentHour === rowHour) {
      setColor(row, "lightcoral");
    
    // If the current hour(integer) is less than row-id(integer), color is green to represent work-hours remaining  
    } else if ((currentHour < rowHour) && (currentHour > rowHour - 17)) {
      setColor(row, "lightgreen");

    // If the current hour(integer) is more than row-id(integer), color is grey to represent work-hours worked   
    } else if ((currentHour > rowHour) && (currentHour < rowHour + 15)) {
      setColor(row, "lightgrey");
    }
  }
});

// Run function, change the background color of a row when boolean arguments = true
function setColor(element, color) {
  element.style.backgroundColor = color;
}