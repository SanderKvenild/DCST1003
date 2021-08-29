function calculate() {
    tall = document.getElementById("tall")
    document.getElementById("halv").textContent = tall.value / 2
    document.getElementById("dobbel").textContent = tall.value * 2
    document.getElementById("triple").textContent = tall.value * 3
    document.getElementById("sqr").textContent = Math.pow(tall.value, 2)
}