calculateDivision();
calculatePlus();

displayPlus();

var form = document.querySelector("form");
var headline = document.getElementById("headline")
form.addEventListener("submit", (event) => {
    event.preventDefault();

    var data = new FormData(form);
    for (const entry of data) {
        if (entry[1] == "plus") {
            displayPlus();
            headline.innerHTML = "Addisjons tabell"
            return
        }
        headline.innerHTML = "Divisjons tabell"
        displayDivision();
    }
}, false);