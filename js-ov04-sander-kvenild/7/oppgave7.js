var names = ["Kari", "Per", "Ola"];
var ages = [30, 25, 43];

function displayAge() {
    var input = document.getElementById("input");
    var output = document.getElementById("output");

    if (input.value == "") {
        input.value = 0;
    }

    numberString = intToString(input.value);

    output.innerHTML = "";
    prefix = "Om " + numberString + " år er "
    if (input.value < 0) {
        prefix = "For " + numberString + " år siden var "
    }
    for (i in names) {
        output.innerHTML += prefix + names[i] + " " + (ages[i] + Number(input.value)) + " år gammel.<br>";
    }
}

/**
 * Converts integers to their norwegian string counter part
 * @param {Int} integer to be converted
 * @returns String/Int parameter as norwegian word or number if more than 9 or negative
 */
function intToString(integer) {
    switch (Math.abs(Number(integer))) {
        case 0:
            return "null";
        case 1:
            return "ett";    // Sometimes en/ei, but not in the context of years
        case 2:
            return "to";
        case 3:
            return "tre";
        case 4:
            return "fire";
        case 5:
            return "fem";
        case 6:
            return "seks";
        case 7:
            return "sju";
        case 8:
            return "åtte";
        case 9:
            return "ni";
    
        default:
            return integer;
    }
}