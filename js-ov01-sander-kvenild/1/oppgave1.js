setTimeout(function() { run() }, 10);   // Gir HTML tid til å vises

function run() {
    var navn = prompt("Hva er navnet ditt?"),
        farge = prompt("Hva er favorittfargen din?");
        
        alert ("Hei, " + navn + ", liker du " + farge + "-farge du?");
}