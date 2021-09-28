//HTMLElements
var input = document.getElementById("input");
var output = document.getElementById("output");

/**
 * Checks if the number in the element with id="input" is prime.
 * Prints the answer out in the element with id="output" in the form of a string.
 */
function primeCheck() {
    /*  Checking for very large inputs
        According to later code large numbers are always divisible by 2

        Largest tested to work: 688846502588399
        Smallest tested to not work: 32361122672259149
    */
    if ( input.value.length >= 15 ) {
        output.innerHTML = "Dette tallet er for stort, og vil gi feil svar"
        return;
    }

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