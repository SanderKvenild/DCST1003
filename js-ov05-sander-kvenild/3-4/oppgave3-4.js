/*
    OPPGAVE 3
*/

var output = document.getElementById("output");
var inputs = document.getElementsByTagName("input");
var errorDiv = document.getElementById("error");

var items = [""];
var prices = [];

/**
 * Reads values of tag input into arrays items and prices, depending on type of input used
 */
function read() {
    // Error message
    errorDiv.innerHTML = ""

    // Parsed inputs
    items = [];
    prices = [];
    
    // Calculated values
    var totalPrice = 0;
    var maxPrice;
    var minPrice;
    var averagePrice;
    
    // Temporary values
    var skipFlag = false;

    // Iterating over values in table
    for (const input of inputs) {
        // ignoring searchbox
        if (input.type == "search") {
            continue;
        }

        // skipping if flag is set
        if (skipFlag) {
            skipFlag = false;
            continue;
        }

        // Treating empty cell
        if (input.value == '') {
            console.log(input.type);
            errorDiv.innerHTML = "En eller flere felt mangler innhold, disse radene ble hoppet over!";

            // Removing item if price is not found
            if (input.type == 'number') {
                items.pop();
                continue;
            }

            // Skipping price if item is not found
            skipFlag = true;
            continue;
        }
    
        // Treating items column
        if (input.type != 'number') {
            items.push(input.value);
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
    averagePrice = mRound(totalPrice / prices.length, 2);

    // Writing to document
    output.innerHTML = 
        "Varer: " + items.join(", ") + "<br>" +
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

/**
 * Checks if value of tag with id="searchbox" in "items" array, if so it displays price in tag with id=searchOutput
 * @returns {void}
 */
function search() {
    // HTML objects
    var searchbox = document.getElementById("searchbox");
    var searchOutput = document.getElementById("searchOutput");
    
    // Calculated values
    var index;
    
    // Finding index of search term in wares
    const equalsSearchbox = (element) => element.toUpperCase() == searchbox.value.toUpperCase();
    index = items.findIndex(equalsSearchbox);
    
    // Checking for search term not in wares
    if (index == -1) {
        searchOutput.innerHTML =  "Varen med navn " + searchbox.value + " og tilhørende pris ble ikke funnet i tabellene";
        return;
    }

    // Writing the answer to HTML
    searchOutput.innerHTML = "Varen med navn " + items[index] + " koster " + prices[index] + " kroner";
}