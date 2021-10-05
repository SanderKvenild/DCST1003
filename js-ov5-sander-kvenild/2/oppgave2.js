var div = document.getElementById("inputs")
for(i=1; i<=5; i++) {
    div.innerHTML += "Vare " + i + ": <input type=\"text\">"
}
var output = document.getElementById("output");
var inputs = document.getElementsByTagName("input");
var array = [];

function read() {
    for (const input in inputs) {
        if (Object.hasOwnProperty.call(inputs, input)) {
            const element = inputs[input];
            array.push(element.value);
        }
    }
    console.log(array);
    output.innerHTML = array.join(", ")
}