function run() {
    // HTML elements
    var min = document.getElementById("min"),
    max = document.getElementById("max"),
    output = document.getElementById("output");
    
    // Temp variables
    var outString = "";
    for (let i = Number(min.value); i <= max.value; i++) {
        outString += i + ", ";
    }
    
    // Displaying output
    output.innerText = outString.slice(0,-2);
}