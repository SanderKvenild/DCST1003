const accuracy = 2

function run() {
    const price = 3.52

    var age = document.getElementById("age").value,
        distance = document.getElementById("distance").value,
        output = document.getElementById("output");

    if (age == "") {
        output.textContent = "Venligst skriv in alder"
        return
    }
    if (distance == "") {
        output.textContent = "Venligst skriv in lengde"
        return
    }
    if (age <= 12) {
        output.textContent = mRound(distance * price * 0.5) + " kr";
        return
    }
    if (age >= 67) {
        output.textContent = mRound(distance * price * 0.8) + " kr";
        return
    }
    output.textContent = mRound(distance * price) + " kr";
}

// Rounds to the amount of decimals given by the constant "accuracy"
// '+' removes trailing zeros
function mRound(float) {
    return +float.toFixed(accuracy)
}