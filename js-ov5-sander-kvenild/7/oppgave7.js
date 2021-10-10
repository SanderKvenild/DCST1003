calculateDivision();
calculatePlus();

displayPlus();

var form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    var data = new FormData(form);
    for (const entry of data) {
        if (entry[1] == "plus") {
            displayPlus();
            return
        }
        displayDivision();
    }
}, false);