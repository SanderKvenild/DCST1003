// TODO: Clean this spaghetti code
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
            prices.push(Number(element.value));
        }
    }
    output.innerHTML = "Varer: " + wares.join(", ") + "<br>" +
    "Priser: " + prices.join(", ") + "<br>" + "<br>";

    var maxPrice = Math.max(...prices); // ... is the array spread operator, which makes array elements separate parameters
    var minPrice = Math.min(...prices);

    var totalPrice = 0;
    prices.forEach(price => {
        totalPrice += price
    });
    var averagePrice = mRound(totalPrice / prices.length, 2);  // TODO: Consider optimizing prices.length to 5, and requiring all rows to be filled by user

    output.innerHTML += "Høyeste pris: " + maxPrice + "<br>" +
        "Laveste pris: " + minPrice + "<br>" + "<br>" +
        "Sum av priser: " + totalPrice + "<br>" +
        "Gjennomsnittspris: " + averagePrice;
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