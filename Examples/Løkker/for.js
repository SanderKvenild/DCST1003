function run() {
    var output = document.getElementById("output");
    for (let i = 0; i < 100; i++) {
        output.innerHTML += "Jeg er tall nummer " + (i+1) + "<br>"
    }
}