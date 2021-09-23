var input = document.getElementById("input");
var output = document.getElementById("output");

function primeCheck() {
    // Treating special case "Numbers less than 2"
    if (input.value < 2) {
        output.innerHTML = input.value + "er ikke et primtall";
        return;
    }
    // Treating special case "floats are not prime"
    if (input.value - Math.floor(input.value)) {
        output.innerHTML = input.value + " er ikke et primtall";
        return;
    }

    // It is mathematically impossible for prime factors to excede the square root of the number
    for (i = 2; i <= Math.sqrt(input.value); i++) {
        if ( !(input.value % i) ) {
            output.innerHTML = input.value + " er ikke et primtall"
            return;
        }
    }

    output.innerHTML = input.value + " er et primtall"
}