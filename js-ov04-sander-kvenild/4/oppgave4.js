var array = [];

var output = document.getElementById("output"); // TODO: make a div for this id

function call() {
    fillArray();
    readArrayToWebsite();
}

function fillArray() {
    array = [1, 2, 3, 4, 5, 6];
}

function readArrayToWebsite() {
    // TODO: iterate over to add spaces
    output.innerHTML = array;
}