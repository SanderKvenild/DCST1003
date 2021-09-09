function run() {
    var sjokostro = document.getElementById("sjokostro"),
        output = document.getElementById("output"),
        answer;

    if (sjokostro.checked) {
        answer = "Kunden ønsker sjokoladestrø";
    } else {
        answer = "Kunden ønsker ikke sjokoladestrø"
    }
    output.textContent = answer
}