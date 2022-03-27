//var myObj = moment().format('MMMM Do YYYY');
//output.innerHTML = JSON.stringify(myObj);

//console.log(moment().format('MMMM Do YYYY'))

var b9 = document.querySelector("#button9");
area9.value = localStorage.getItem("notes");
b9.addEventListener("click", event => {
    localStorage.setItem("notes", area9.value);
});

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
