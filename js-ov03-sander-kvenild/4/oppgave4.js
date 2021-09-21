var output = document.getElementById("output"),
    outStr = "<table>";

for (var row = 10; row < 20; row++) {
    outStr += "<tr>";
    for (var col = 10; col < 20; col++) {
        outStr += "<td>" + row*col + "</td>";
    }
    outStr += "</tr>";
}
outStr += "</table>"

output.innerHTML = outStr;