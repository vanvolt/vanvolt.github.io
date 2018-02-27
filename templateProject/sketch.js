let x, y;
let speed;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = 0;
  y = 0;
  speed = 100;
}

function draw() {
  background(255);
  fill(0);
  rect(x, y, 100, 100);
  moving();
}

function moveRight() {
  x = x + 10;
}

function moveLeft() {
  x = x - 10;
}

function moveUp() {
  y = y - 10;
}

function moveDown() {
  y = y + 10;
}

function moving() {
  if (x <= width - speed && y === 0) {
    moveRight();
  }
  else if (x >= width - speed && y <= height - speed) {
    moveDown();
  }
  else if (x >= 0 && y >= height - speed) {
    moveLeft();
  }
  else {
    moveUp();
  }
}
