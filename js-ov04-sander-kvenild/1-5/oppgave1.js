/*
    OPPGAVE 1
*/
function teenager(age) {
    if (Number(age) >= 13 && Number(age) < 20) {
        return "Du er tenåring";
    }
    return "Du er ikke tenåring";
}

function teenCheck() {
    var age = document.getElementById("age").value;
    document.getElementById("output1").innerHTML = teenager(age);
}

/*
    OPPGAVE 2
*/
function larger(a, b) {
    return Math.max(a, b);
}

function largerCheck() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    document.getElementById("output2").innerHTML = larger(num1, num2);
}

/*
    OPPGAVE 3
*/
// TODO: 2.3 gives float error
function areaSquare(side) {
    return side**2;
}

function sqrArea() {
    var side = document.getElementById("side").value;
    document.getElementById("output3").innerHTML = areaSquare(side);
}

/*
    OPPGAVE 4 + 5
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
    OPPGAVE 5
*/
function fillArrayMessage() {
    fillArray();
    alert(array[array.length-1]);
}
