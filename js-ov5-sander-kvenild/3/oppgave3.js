var div = document.getElementById("inputs")
for(i=1; i<=5; i++) {
    div.innerHTML += "<tr><td><input type=\"text\"></td><td><input type=\"number\"></td></tr>"
}

var output = document.getElementById("output");
var inputs = document.getElementsByTagName("input");

function read() {
    var wares = [];
    var prices = [];

    for (const index in inputs) {
        if (Object.hasOwnProperty.call(inputs, index)) {
            const element = inputs[index];
            if (element.value == '') {
                continue;
            }

            if (index % 2 == 0) {
                wares.push(element.value);
                continue;
            }
            prices.push(element.value);
        }
    }
    output.innerHTML = "Varer: " + wares.join(", ") + "<br>" +
    "Priser: " + prices.join(", ");
}