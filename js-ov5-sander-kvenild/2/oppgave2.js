var div = document.getElementById("inputs")
for(i=1; i<=5; i++) {
    div.innerHTML += "Vare " + i + ": <input type=\"text\"><br>"
}

var output = document.getElementById("output");
var inputs = document.getElementsByTagName("input");
var array = [];

function read() {
    for (const input in inputs) {
        if (Object.hasOwnProperty.call(inputs, input)) {
            const element = inputs[input];
            if (element.value == '') {
                continue;
            }
            array.push(element.value);
        }
    }
    output.innerHTML = array.join(", ")
}