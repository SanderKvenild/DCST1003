var output = document.getElementById("output");
var outStr = "<table><tr><td>*</td>";

// Column labels
for (var i = 10; i < 20; i++) {
    outStr += "<td><b>" + i + "</b></td>";
}
outStr += "</tr>"

for (var row = 10; row < 20; row++) {
    outStr += "<tr><td><b>" + row + "</b></td>";
    for (var col = 10; col < 20; col++) {
        outStr += "<td>" + row*col + "</td>";
    }
    outStr += "</tr>";
}
outStr += "</table>"

output.innerHTML = outStr;