function submit() {
    var fornavn = document.getElementById("fornavn").value;
    var mellom = document.getElementById("mellomnavn").value;
    var etter = document.getElementById("etternavn").value;
    if (mellom===null) {
        document.getElementById("navn").textContent = fornavn + " " + etter;
        return
    }
    document.getElementById("navn").textContent = fornavn + " " + mellom + " " + etter;
}