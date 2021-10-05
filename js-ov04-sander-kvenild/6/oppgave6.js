var names = ["Kari", "Per", "Ola"];
var ages = [30, 25, 43];

function displayAge() {
    var input = document.getElementById("input");
    var output = document.getElementById("output");

    if (input.value == "") {
        input.value = 0;
    }

    output.innerHTML = "";
    prefix = "Om " + input.value + " år er "
    if (input.value < 0) {
        prefix = "For " + -input.value + " år siden var "
    }
    for (i in names) {
        output.innerHTML += prefix + names[i] + 
            " " + (ages[i] + Number(input.value)) + " år gammel.<br>";
    }
}