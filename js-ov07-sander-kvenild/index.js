// Retrieve the needed HTML elements:
let colorSelection = document.getElementById('colorSelection');
let brushSize = document.getElementById('brushSize');
let brushSizeLabel = document.getElementById('brushSizeLabel')
let drawingBoard = document.getElementById('drawingBoard');
let clearButton = document.getElementById('clearButton');
let fillButton = document.getElementById('fillButton');

// Associate color names to RGB values
// TODO: Hard code white where it is used
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
    drawSquare(i, colorSelection.value);
  };

  // Add square as child to drawingBoard element
  drawingBoard.appendChild(square);
  // Add square to squares table
  squares.push(square);
}

brushSize.onchange = () => {
  brushSizeLabel.innerText = brushSize.value;
}

// TODO: Consider changing to onmousemove
drawingBoard.ondrag = (event) => {
  // x and y relative to drawingBoard
  let x = event.clientX - drawingBoard.offsetLeft;
  let y = event.clientY - drawingBoard.offsetTop;

  // Find which square was dragged over
  let squareX = Math.floor(x / 20);
  let squareY = Math.floor(y / 20);

  // Make sure square exists before painting
  if (squareX < 0 || squareX > 29 || squareY < 0|| squareY > 19) return;

  // 1 in y direction = 30 squares over
  let squareNumber = 30 * squareY + squareX
  drawSquare(squareNumber, colorSelection.value)
}

clearButton.onclick = () => {
    for (const square of squares) {
        square.style.backgroundColor = colors.White;
    };
}

fillButton.onclick = () => {
  for (const square of squares) {
    square.style.backgroundColor = colorSelection.value;
  };
}

// TODO: improve readability
function drawSquare (index, color) {
  let size = brushSize.value - 1;
  for (let y = -size; y < size; y++) {
    // Limiting y to drawingBoard
    if (index + y * 30 < 0 || index + y * 30 > 599) continue

    for (let x = -size; x < size; x++) {
      // Limiting x to drawingBoard
      if (index%30 + x < 0 || index%30 + x > 29) continue;

      squares[index + y * 30 + x].style.backgroundColor = color;
    }
  }
  squares[index].style.backgroundColor = color;
}