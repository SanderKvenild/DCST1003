var out = document.getElementById("tabell")

var html = "<table>"
for (let row = 1; row <= 10; row++) {
    html += "</tr>";
    for (let col = 1; col <= 10; col++) {
        html += "<td>" + (row * col) + "</td>";
    }
    html += "</tr>";
}
html += "</table>";

out.innerHTML = html;