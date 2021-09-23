var outString = "";
var output = document.getElementById("output");

for (var i = 1; i <= 10; i++) {
    outString += i + " ";
    output.innerHTML += outString + "<br>";
}