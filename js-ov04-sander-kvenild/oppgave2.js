function larger(a, b) {
    return Math.max(a, b);
}

function largerCheck() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    document.getElementById("output2").innerHTML = larger(num1, num2);
}