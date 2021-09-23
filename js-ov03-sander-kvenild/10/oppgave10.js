var input = document.getElementById("input");
var output = document.getElementById("output");

function primeCheck() {
    // It is mathematically impossible for prime factors to excede the square root of the number
    if (input.value == 1) {
        output.innerHTML = "Ikke primtall";
        return;
    }
    for (i = 2; i <= Math.sqrt(input.value); i++) {
        if ( !(input.value % i) ) {
            output.innerHTML = "Ikke primtall"
            return;
        }
    }
    output.innerHTML = "Primtall"
}