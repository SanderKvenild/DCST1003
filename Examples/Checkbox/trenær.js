function run() {
    var sjokostro = document.getElementById("sjokostro"),
        output = document.getElementById("output"),
        answer;

    answer = sjokostro.checked ? 
        "Kunden ønsker sjokostrø": 
        "Kunden ønsker ikke sjokostrø";
    output.textContent = answer
}