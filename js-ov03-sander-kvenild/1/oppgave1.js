var output = document.getElementById("output"),
    outString = "";

var i = 1
while (i <= 7) {
    outString += "Jeg er tall nummer " + i + "\n";
    i++;
}

output.innerText = outString;