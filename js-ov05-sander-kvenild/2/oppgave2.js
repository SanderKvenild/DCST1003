var output = document.getElementById("output");
var inputs = document.getElementsByTagName("input");

function read() {
    var array = [];
    for (const input of inputs) {
        if (input.value == '') {
            continue;
        }
        array.push(input.value);
    }
    output.innerHTML = array.join(", ");
}