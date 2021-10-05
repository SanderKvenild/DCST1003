var div = document.getElementById("inputs")
for(i=0; i<5; i++) {
    div.innerHTML += "<input type=\"text\">"
}

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
}