// How many decimals to round answer to
const accuracy = 10;

function calculate() {
    var inputValue = document.getElementById("tall").value;

    document.getElementById("halv").textContent = inputValue / 2;
    document.getElementById("dobbel").textContent = inputValue * 2;
    document.getElementById("triple").textContent = mRound(inputValue * 3);
    document.getElementById("sqr").textContent = mRound(inputValue ** 2);
}

// Rounds to the amount of decimals given by the constant "accuracy"
// '+' removes trailing zeros
function mRound(float) {
    return +float.toFixed(accuracy)
}
