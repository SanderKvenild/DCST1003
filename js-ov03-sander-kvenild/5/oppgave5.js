var output = document.getElementById("output");

for (var i = 10; i > 0; i--) {
    output.innerHTML += i + " green bottles, hanging on a wall,<br>";
    output.innerHTML += i + " green bottles, hanging on a wall,<br>";
    output.innerHTML += "If 1 green bottle were to accidentally fall,<br>";
    if (i==2) {
        "There'd be 1 green bottle, hanging on the wall,<br>";
        continue;
    }
    output.innerHTML += "There'd be " + (i-1) + " green bottles, hanging on the wall,<br>";
}