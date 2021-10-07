var PLUSStabell = [];
var output = document.getElementById("output");

calculatePlus();
displayPlus();

function calculatePlus() {
    // Looping rows
    for (var i = 0; i < 10; i++) {
        var row = [];

        // Looping columns
        for (var j = 0; j < 10; j++) {
            row.push( i + j );
        }

        PLUSStabell.push(row);
    }
}

function displayPlus() {
    // Top left element
    outputText = "<tr><td><b> + </b></td>";

    // Column labels
    for (var i = 0; i < 10; i++) {
        outputText += "<td><b>" + i + "</b></td>";
    }
    outputText += "</tr>";

    // Looping rows
    for (var i = 0; i < 10; i++) {
        outputText += "<tr><td><b>" + i + "</b></td>";

        // Looping columns
        for (var j = 0; j < 10; j++) {
            outputText += "<td>" + PLUSStabell[i][j] + "</td>";
        }
        outputText += "</tr>";
    }

    // Writing output to document
    output.innerHTML += outputText;
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