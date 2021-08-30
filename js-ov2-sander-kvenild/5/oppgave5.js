function parse() {
    var input = document.getElementById("input"),
        output = document.getElementById("output");

    switch (input.value.toUpperCase()) {
        case "H":
            output.textContent = "Hjemme";
            break;

        case "U":
            output.textContent = "Uavgjort";
            break;

        case "B":
            output.textContent = "Borte";
            break;
    
        default:
            output.textContent = "Vennligst skriv in enten \"H\", \"U\", eller \"B\" i tekst feltet uten hermetegn (\")";
            break;
    }
}