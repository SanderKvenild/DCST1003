var divisionTable = [];
var output = document.getElementById("output");

calculate();
display();

function calculate() {
    for (var i = 1; i <= 10; i++) {
        var row = [];
        for (var j = 1; j <= 10; j++) {
            row.push(mRound(i/j, 4));
        }
        divisionTable.push(row);
    }
    
    console.log(divisionTable);
}

function display() {
    outputText = "<tr><td><b>/</b></td>";

    for (var i = 1; i <= 10; i++) {
        outputText += "<td><b>" + i + "</b></td>";
    }
    outputText += "</tr>";

    for (var i = 0; i < 10; i++) {
        outputText += "<tr><td><b>" + i + "</b></td>";
        for (var j = 0; j < 10; j++) {
            outputText += "<td>" + divisionTable[i][j] + "</td>";
        }
        outputText += "</tr>";
    }
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