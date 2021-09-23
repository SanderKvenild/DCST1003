var input = document.getElementById("input");
var output = document.getElementById("output");

function primeCheck() {
    // Checking for only integers 2 and over
    if (
        input.value < 2 ||                      // false if over 2
        input.value - Math.floor(input.value)   // 0 if integer
    ) {
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