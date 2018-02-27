let x, y;
let speed;
let a, b;

function setup() {
  background(255);
  createCanvas(windowWidth, windowHeight);
  // x = 0;
  // y = 0;
  // speed = 100;

}

function draw() {
  a = random(width);
  b = random(height);

  if (mouseIsPressed && keyIsPressed && (key === "t" || key === "T")) {
    // a = random(windowWidth);
    // b = random(windowHeight);
    triangle(a, b, a + 50, b - 100, a + 100, b);
  }

  if (keyIsPressed && (key === "x" || key === "z")) {
    // a = random(windowWidth);
    // b = random(windowHeight);
    rect(a, b, 100, 50);
  }
  // fill(0);
  // rect(x, y, 100, 100);
  // moving();
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
