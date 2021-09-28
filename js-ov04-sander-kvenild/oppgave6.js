var names = ["Kari", "Per", "Ola"];
var ages = [30, 25, 43];

function displayAge() {
    var input = document.getElementById("input");
    var output = document.getElementById("output");

    if (input.value == "") {
        input.value = 0;
    }

    output.innerHTML = "";
    for (i in names) {
        output.innerHTML += "Om " + input.value + " år er " + names[i] + 
            " " + (ages[i] + Number(input.value)) + " år gammel.<br>";
    }
}