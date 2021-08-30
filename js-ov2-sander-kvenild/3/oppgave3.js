function parse() {
    var input = document.getElementById("input"),
        output = document.getElementById("output");

    if (input.value == "H") {
        output.textContent = "Hjemme";
    } else if (input.value == "U") {
        output.textContent = "Uavgjort";
    } else if (input.value == "B") {
        output.textContent = "Borte";
    } else {
        output.textContent = "Vennligst skriv in enten \"H\", \"U\", eller \"B\" i tekst feltet uten hermetegn (\")";
    }
}