var output = document.getElementById("output"),
    outString = "";

var i = 12
while (i <= 98) {
    outString += "Jeg er tall nummer " + i + "\n";
    i += 5;
}

output.innerText = outString;