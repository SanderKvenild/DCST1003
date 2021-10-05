// TODO: 2.3 gives float error
function areaSquare(side) {
    return side**2;
}

function sqrArea() {
    var side = document.getElementById("side").value;
    document.getElementById("output3").innerHTML = areaSquare(side);
}