function run() {
    // HTML elements
    var min = document.getElementById("min"),
    max = document.getElementById("max"),
    output = document.getElementById("output");
    
    // Temp variables
    var outString = "";
    
    // TODO: Replace number 2 with min.value, this breaks the program when min.value >= 2
    for (let i = 2; i <= max.value; i++) {
        console.log(min.value, i);
        outString += i + ", ";
    }
    console.log("run()")
    
    // Displaying output
    output.innerText = outString;
}