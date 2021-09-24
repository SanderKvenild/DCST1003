/*
*   Oppgave 4
*/
var array = [];

function call() {
    fillArray();
    readArrayToWebsite();
}

function fillArray() {
    array = [1, 2, 3, 4, 5, 6];
}

function readArrayToWebsite() {
    // TODO: iterate over to add spaces
    var output = document.getElementById("output4"); // TODO: make a div for this id
    output.innerHTML = array;
}

/*
*   Oppgave 5
*/
function fillArrayMessage() {
    fillArray();
    alert(array[array.length-1]);
}