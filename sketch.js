/* Ryan Pavsek */
const w = h = 25; //number of blocks
let scale = 15; //default scale of blocks on canvas (overwritten in setCanvasSize())
let blocks = []; //blocks in canvas
let colors = [[]];  //colors used
const colorsNum = 6; //number of colors used
let userColor = 0; //default color of user

/* Base functions */
function setup() { //p5 Function
  setCanvasSize();
  generateColors();
  fillBlocks();
  userColor = blocks[0][0];
}

function draw() { //p5 Function
  setCanvasSize();
  createCanvas(w * scale, h * scale);
  drawBlocks();
}

/* Canvas related functions */
function setCanvasSize() {
  (windowHeight > windowWidth) ? scale = Math.floor(windowWidth/w) : scale = Math.floor(windowHeight/h);
}

/* User input related functions */
function mouseReleased() { //p5 Function
  searchBlocks(locToColor(mouseX, mouseY));
}

/* Block related functions */
function generateColors() {
  for (let i = 0; i < colorsNum; i++) {
    colors[i] = [Math.random(), Math.random(),Math.random()]
  }
}

function fillBlocks() { //Generate colors with generateColors() before use.
  for (let x = 0; x < w; x++) {
    blocks.push([]);
    blocks.push(new Array(h));
    for (let y = 0; y < h; y++) {
      blocks[x][y] = Math.floor(Math.random() * colorsNum);
    }    
  }
}

function drawBlocks() { //Must populate blocks with fillBlocks() before use.
  for (let x = 0; x < w; x++) {
    for (let y = 0; y < h; y++) {
      colorMode(RGB, 1);
      fill(colors[blocks[x][y]]);
      strokeWeight(0);
      rect(x * scale, y * scale, scale, scale);
    }    
  }
}

function locToColor(x, y) {
  return blocks[Math.floor(x / scale)][Math.floor(y / scale)];
}
/* Logic related functions */

function searchBlocks(selectedColor) {
  compareAdjacentBlocks(selectedColor, 0, 0);
  userColor = selectedColor;
}

function compareAdjacentBlocks(color, x, y) {
  blocks[x][y] = color;
  [[1, 0], [0, 1], [-1, 0], [0, -1]].forEach(i => {
    if (x + i[0] >= 0 && y + i[1] >= 0) {
      if (blocks[x + i[0]][y + i[1]] == userColor) {
        blocks[x + i[0]][y + i[1]] = color;
        compareAdjacentBlocks(color, x + i[0], y + i[1])
      }
    }
  });
}