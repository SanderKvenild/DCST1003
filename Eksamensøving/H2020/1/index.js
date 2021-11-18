// TODO: remove console.log()

// HTML elements
let form = document.getElementById("form");
let antall = document.getElementById("antall");
let type2div = document.getElementById("type2div");
let ordre = document.getElementById("ordre");

// Disables submitting by pressing enter
window.onkeydown = (event) => {
    if (event.keyCode == 13) {
        event.preventDefault();
        return false;
    }
}

// Setting dates to today as a defualt
document.getElementById("leietid").valueAsDate = new Date();
document.getElementById("leveringstid").valueAsDate = new Date();

// Capturing submit event
form.addEventListener("submit", (event) => {
    // Don't refresh page
    // Tror denne linjen må fjernes for at forespørselen skal sendes til serveren
    event.preventDefault();

    // variables for later
    let request = {}
    let pris = 0;

    let data = new FormData(form);

    // parsing formdata
    for (const entry of data) {
        //console.log(entry);
        switch (entry[0]) {
            case 'lånested':
                request.lånested = entry[1];
                break;
            case 'leveringssted':
                request.leveringssted = entry[1];
                break;
            case 'antall':
                request.antall = entry[1];
                break;
            case 'type1':
                request.type1 = entry[1];
                break;
            case 'type2':
                request.type2 = entry[1];
                break;
            case 'leietid':
                request.leietid = new Date(entry[1]);
                break;
            case 'leveringstid':
                request.leveringstid = new Date(entry[1]);
                break;
            case 'kommentar':
                request.kommentar = entry[1];
                break;
        
            default:
                console.error(entry[0], "not found!");
                break;
        }
    }

    pris += båtpris(request.type1);
    if (request.antall >= 2) {
        pris += båtpris(request.type2);
    }

    let dager = (request.leveringstid - request.leietid) / (24 * 60 * 60 * 1000); 
    console.log(dager);

    pris = (dager > 1) ? pris * dager : pris;

    pris += (request.lånested == request.leveringssted) ? 0 : 50;

    request.pris = pris + " kr";
    
    // TODO: Better formating
    ordre.innerText = JSON.stringify(request)
}, false);

// Show type2div if antall==2
antall.onchange = () => {
    type2div.hidden = !(antall.value == 2);
}

function båtpris(string) {
    switch (string) {
        case 'Kano':
            return 395;
        case 'Kajak':
            return 495;
        case 'Supboard':
            return 295;

        default:
            console.error(request.type2, "doesn't exist");
            return 0;
    }
}