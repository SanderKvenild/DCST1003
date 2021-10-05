function teenager(age) {
    if (Number(age) >= 13 && Number(age) < 20) {
        return "Du er tenåring";
    }
    return "Du er ikke tenåring";
}

function teenCheck() {
    var age = document.getElementById("age").value;
    document.getElementById("output1").innerHTML = teenager(age);
}

function larger(a, b) {
    return Math.max(a, b);
}

function largerCheck() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    document.getElementById("output2").innerHTML = larger(num1, num2);
}