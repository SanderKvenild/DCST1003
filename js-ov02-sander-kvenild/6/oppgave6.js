const accuracy = 2

function run() {
    const price = 3.52

    var age = document.getElementById("age").value,
        distance = document.getElementById("distance").value,
        output = document.getElementById("output"),
        fee = 0;

    // Catching errors
    if (age == "") {
        output.textContent = "Venligst skriv in alder"
        return
    }
    if (distance == "") {
        output.textContent = "Venligst skriv in lengde"
        return
    }

    // Calculating fee
    fee = distance * price * ageCheck(age)
    
    // Runder av og skriver svar
    output.textContent = mRound(fee) + " kr";
}

/**
 * Rounds to the amount of decimals given by the constant "accuracy"
 * @param {number} float - To be rounded 
 * @returns {number} Rounded - Number after rounding
 */
function mRound(float) {
    // '+' removes trailing zeros
    return +float.toFixed(accuracy)
}

/**
 * Checks for savings based on age
 * @param {number} age - Age of the person using the ticket
 * @returns {number} - savings 0 is free, 1 is normal price
 */
function ageCheck(age) {
    if (age <= 12) {
        return 0.5
    }
    if (age >= 67) {
        return 0.8
    }
    return 1
}