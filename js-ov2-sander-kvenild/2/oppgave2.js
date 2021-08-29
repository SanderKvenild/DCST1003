function run() {
    var age = document.getElementById("age").value;
    var output = document.getElementById("output");

    output.textContent = "Du er myndig."
    if (age < 18) {
        output.textContent = "Du er ikke myndig enda."
        return
    }
    if (age >= 67) {
        output.textContent += " Du er dessuten pensjonist"
    }
}