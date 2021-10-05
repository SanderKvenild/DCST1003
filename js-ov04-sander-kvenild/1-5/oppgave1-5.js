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
function areaSquare(side) {
    return mRound(side**2, side.length);
}

function sqrArea() {
    var side = document.getElementById("side").value;
    document.getElementById("output3").innerHTML = areaSquare(side);
}

/**
 * Rounds to the amount of decimals given by the constant "accuracy"
 * @param {number} float - To be rounded 
 * @returns {number} Rounded - Number after rounding
 */
 function mRound(float, accuracy) {
    // '+' removes trailing zeros
    return +float.toFixed(accuracy);
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
    var output = document.getElementById("output4");
    output.innerHTML = array.join(", ");
}

/*
    OPPGAVE 5
*/
function fillArrayMessage() {
    fillArray();
    alert(array.slice(-1));
}
