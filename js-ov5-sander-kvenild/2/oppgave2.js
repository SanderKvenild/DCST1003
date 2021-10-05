var div = document.getElementById("inputs")
for(i=1; i<=5; i++) {
    div.innerHTML += "Vare " + i + ": <input type=\"text\"><br>"
}

var output = document.getElementById("output");
var inputs = document.getElementsByTagName("input");
var array = [];

function read() {
    for (const input in inputs) {
        const element = inputs[input];
        array.push(element.value);
    }
    output.innerHTML = array.join(", ")
}