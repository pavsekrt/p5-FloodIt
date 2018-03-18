const w = h = 25;
let scale = 15;
let blocks = [];

function setup() {
  setCanvasSize();
  for (let x = 0; x < w; x++) {
    blocks.push([]);
    blocks.push(new Array(h));
    for (let y = 0; y < h; y++) {
      blocks[x][y] = [Math.random(), Math.random(),Math.random()];
    }    
  }
}

function draw() {
  setCanvasSize();
  createCanvas(w * scale, h * scale);
  for (let x = 0; x < w; x++) {
    for (let y = 0; y < h; y++) {
      colorMode(RGB, 1);
      fill(blocks[x][y]);
      strokeWeight(0);
      rect(x * scale, y * scale, scale, scale);
    }    
  }

}

function setCanvasSize() {
  (windowHeight > windowWidth) ? scale = Math.floor(windowWidth/w) : scale = Math.floor(windowHeight/h);
}