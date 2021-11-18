let K = 1;

// Brettet er sett fra Hvit, med A1 neders til venstre
Sjakkbrett = [
    [,,,,,,,],
    [,,,,,,,],
    [,,,,K,,,],
    [,,,,,,,],
    [,,,,,,,],
    [,,,,,,,],
    [,K,,,,,,],
    [,,,,,,,]
]

// Finding kings
let Kings = []
for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        if (Sjakkbrett[i][j] == K) {
            Kings.push([8-i, j])
        }
    }
}

// Converting j to letter
for (const king of Kings) {
    switch (king[1]) {
        case 0:
            king[1] = "A";
            break;
        case 1:
            king[1] = "B";
            break;
        case 2:
            king[1] = "C";
            break;
        case 3:
            king[1] = "D";
            break;
        case 4:
            king[1] = "E";
            break;
        case 5:
            king[1] = "F";
            break;
        case 6:
            king[1] = "G";
            break;
        case 7:
            king[1] = "H";
            break;
    
        default:
            break;
    }
    console.log(king[1] + king[0]);
}
