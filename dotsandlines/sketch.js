let x, y;
let a, b, c;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noCursor();
}

function draw() {
  background(0);
  drawDots();
}

function drawDots() {
  for (let x=width/25; x<width - width/25; x+=width/25) {
    for (let y=height/15; y<height - height/15; y+=height/15) {
      a = random(255);
      b = random(255);
      c = random(255);
      stroke(a, b, c, 500);
      line(x, y, mouseX, mouseY);
      fill(a, b, c);
      ellipse(x, y, 4, 4);
      // point(x, y);
    }
  }
}
