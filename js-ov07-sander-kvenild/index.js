// Retrieve the needed HTML elements:
let colorSelection = document.getElementById('colorSelection');
let drawingBoard = document.getElementById('drawingBoard');
let clearButton = document.getElementById('clearButton');
let fillButton = document.getElementById('fillButton');

// Associate color names to RGB values
let colors = {
  Red: 'rgb(255, 0, 0)',
  White: 'rgb(255, 255, 255)',
  Black: 'rgb(0, 0, 0)',
};

// The drawingBoard squares will be stored in this table for later use:
let squares = [];

// Create the drawingBoard squares:
for (let i = 0; i < 600; i++) {
  // Create new drawingBoard square
  let square = document.createElement('div');

  square.style.height = '20px';
  square.style.width = '20px';
  square.style.float = 'left';
  square.style.backgroundColor = colors['White'];

  square.onclick = (event) => {
    // Set color of square to selected color
    square.style.backgroundColor = colors[colorSelection.value];
  };

  // Add square as child to drawingBoard element
  drawingBoard.appendChild(square);
  // Add square to squares table
  squares.push(square);
}

drawingBoard.ondrag = (event) => {
  let x = event.clientX - drawingBoard.offsetLeft;
  let y = event.clientY - drawingBoard.offsetTop;

  // Find which square was dragged over
  let squareX = Math.floor(x / 20);
  let squareY = Math.floor(y / 20);

  // 1 in y direction = 30 squares over
  let squareNumber = 30 * squareY + squareX
  squares[squareNumber].style.backgroundColor = colors[colorSelection.value];
}

clearButton.onclick = () => {
    for (const square of squares) {
        square.style.backgroundColor = colors.White;
    };
}

fillButton.onclick = () => {
  for (const square of squares) {
    square.style.backgroundColor = colors[colorSelection.value];
  };
}