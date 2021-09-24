function teenager(age) {
    if (Number(age) >= 13 && Number(age) < 20) {
        return "Du er tenåring";
    }
    return "Du er ikke tenåring";
}

function teenCheck() {
    age = document.getElementById("age").value;
    document.getElementById("output1").innerHTML = teenager(age)
}