/* Ryan Pavsek */
const w = h = 25; //number of blocks
let scale = 15; //default scale of blocks on canvas (overwritten in setCanvasSize())
let blocks = []; //blocks in canvas
let colors = [[]];  //colors used
const colorsNum = 10; //number of colors used 

/* Base functions */
function setup() {
  setCanvasSize();
  generateColors();
  fillBlocks();
}

function draw() {
  setCanvasSize();
  createCanvas(w * scale, h * scale);
  drawBlocks();
}

/* Canvas related functions */
function setCanvasSize() {
  (windowHeight > windowWidth) ? scale = Math.floor(windowWidth/w) : scale = Math.floor(windowHeight/h);
}

/* User input related functions */


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
      blocks[x][y] = colors[Math.floor(Math.random() * colorsNum)];
    }    
  }
}

function drawBlocks() { //Must populate blocks with fillBlocks() before use.
  for (let x = 0; x < w; x++) {
    for (let y = 0; y < h; y++) {
      colorMode(RGB, 1);
      fill(blocks[x][y]);
      strokeWeight(0);
      rect(x * scale, y * scale, scale, scale);
    }    
  }
}