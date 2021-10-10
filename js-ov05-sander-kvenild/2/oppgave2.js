var output = document.getElementById("output");
var inputs = document.getElementsByTagName("input");

function read() {
    var array = [];
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