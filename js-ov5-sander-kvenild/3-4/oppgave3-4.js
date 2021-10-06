/*
    OPPGAVE 3
*/

// TODO: Consider hardcoding this in HTML
var div = document.getElementById("inputs")
for(i=1; i<=5; i++) {
    div.innerHTML += "<tr><td><input type=\"text\"></td><td><input type=\"number\"></td></tr>"
}

var output = document.getElementById("output");
var inputs = document.getElementsByTagName("input");

var wares = [""];
var prices = [];

function read() {
    // Inputs
    wares = [];
    prices = [];

    // Calculated values
    var totalPrice = 0;
    var maxPrice;
    var minPrice;
    var averagePrice;

    // TODO: Do something about one empty and one filled cell in a row
    for (input of inputs) {
        // Treating empty cell
        if (input.value == '') {
            continue;
        }
    
        // Treating wares column
        if (input.type != 'number') {
            wares.push(input.value);
            continue;
        }

        // Pushing prices to array
        prices.push(Number(input.value));
    }

    // Adding up prices
    prices.forEach(price => {
        totalPrice += price
    });

    maxPrice = Math.max(...prices); // ... is the array spread operator, which makes array elements separate parameters
    minPrice = Math.min(...prices);
    averagePrice = mRound(totalPrice / prices.length, 2);  // TODO: Consider optimizing prices.length to 5, and requiring all rows to be filled by user

    // Writing to document
    output.innerHTML = 
        "Varer: " + wares.join(", ") + "<br>" +
        "Priser: " + prices.join(", ") + "<br>" + 
        "<br>" +
        "Høyeste pris: " + maxPrice + "<br>" +
        "Laveste pris: " + minPrice + "<br>" + 
        "<br>" +
        "Sum av priser: " + totalPrice + "<br>" +
        "Gjennomsnittspris: " + averagePrice;
}

/**
 * Rounds to the amount of decimals given by the "accuracy" parameter
 * @param {number} float - To be rounded 
 * @param {accuracy} int - Number of decimals to include in output
 * @returns {number} Rounded - Number after rounding
 */
 function mRound(float, accuracy) {
    // '+' removes trailing zeros
    return +float.toFixed(accuracy);
}

/*
    OPPGAVE 4
*/

function search() {
    // HTML objects
    var searchbox = document.getElementById("searchbox");
    var searchOutput = document.getElementById("searchOutput");
    
    // Calculated values
    var index;
    
    // Finding index of search term in wares
    const equalsSearchbox = (element) => element.toUpperCase() == searchbox.value.toUpperCase();
    index = wares.findIndex(equalsSearchbox);
    
    // Checking for search term not in wares
    if (index == -1) {
        searchOutput.innerHTML =  "Varen med navn " + searchbox.value + " og tilhørende pris ble ikke funnet i tabellene";
        return;
    }

    // Writing the answer to HTML
    searchOutput.innerHTML = "Varen med navn " + wares[index] + " koster " + prices[index] + " kroner";
}