let y;

function setup() {
  createCanvas(windowWidth, windowHeight);
  let y = height/2;
}

function draw() {
  background(255);
  fill(0);
  ellipse(width/2, y, 50, 50);
  for (let i=0; i<50; i++) {
    y = y + 9.8/60;
  }
}

function keyPressed() {
  if (key === " ") {
    y = y + 50;
  }
}
