let w = h = 25;
const scale = 15;
let blocks = [];

function setup() {
  setCanvasSize();
  for (let x = 0; x < w; x++) {
    blocks.push([]);
    blocks.push(new Array(h));
    for (let y = 0; y < h; y++) {
      blocks[x][y] = Math.random();
    }    
  }
  createCanvas(w * scale, h * scale);
  for (let x = 0; x < w; x++) {
    for (let y = 0; y < h; y++) {
      colorMode(RGB, 1);
      fill(blocks[x][y]);
      rect(x * scale, y * scale, scale, scale);
    }    
  }

}

function draw() {
  
}

function setCanvasSize() {
  (windowHeight > windowWidth) ? w = h = Math.floor(windowWidth/scale) : w = h = Math.floor(windowHeight/scale);
}