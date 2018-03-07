let x, y;
let a, b;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noCursor();
}

function draw() {
  background(0);
  drawDots();
}

function drawDots() {
  a = mouseX;
  b = mouseY;
  for (let x=width/25; x<width - width/25; x+=width/25) {
    for (let y=height/15; y<height - height/15; y+=height/15) {
      stroke(255, 60);
      line(x, y, a, b);
      fill(255);
      ellipse(x, y, 4, 4);
      // point(x, y);
    }
  }
}
