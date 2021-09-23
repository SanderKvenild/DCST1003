var output = document.getElementById("output");

function odd() {
    output.innerHTML = "";
    for (i = 1; i <= 10; i++) {
        if (i % 2) {
            continue;
        }
        output.innerHTML += i + " "
    }
}

function even() {
    output.innerHTML = "";
    for (i = 1; i <= 10; i++) {
        if (i % 2) {
            output.innerHTML += i + " "
        }
    }
}