var bricks = [[2,3,8], [4,3,2], [2,4,7], [6,5,1]]
var volumes = []

var output = document.getElementById("output");

bricks.forEach(element => {
    volumes.push(element[0]*element[1]*element[2]);
});

output.innerHTML += Math.max(volumes[0], volumes[1], volumes[2], volumes[3]) + " cm<sup>3</sup>.";