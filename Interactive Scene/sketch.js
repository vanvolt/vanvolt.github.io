let redAmount = 10;
let greenAmount = 15;
let blueAmount = 20;
let red = 1;
let green = 2;
let blue = 3;
let a = 100;
let b = 100;
let whichShape = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  document.addEventListener("contextmenu", event => event.preventDefault());
}

function draw() {
  background(100);
  if (whichShape === 1) {
    drawCircle(mouseX, mouseY);
  }
  if (whichShape === 2) {
    drawSquare(mouseX, mouseY);
  }
}

function drawCircle(x, y) {
  if (red > 8) {
    red = 8;
  }
  else if (red < 0.125) {
    red = 0.125;
  }
  if (green > 16) {
    green = 16;
  }
  else if (green < 0.25) {
    green = 0.25;
  }
  if (blue > 24) {
    blue = 24;
  }
  else if (red < 0.5) {
    blue = 0.5;
  }
  redAmount = redAmount + red;
  redAmount += red;
  redAmount = constrain(redAmount, 0, 255);
  if (redAmount === 255) {
    redAmount = 0;
  }
  greenAmount = greenAmount + green;
  greenAmount += green;
  greenAmount = constrain(greenAmount, 0, 255);
  if (greenAmount === 255) {
    greenAmount = 0;
  }
  blueAmount = blueAmount + blue;
  blueAmount += blue;
  blueAmount = constrain(blueAmount, 0, 255);
  if (blueAmount === 255) {
    blueAmount = 0;
  }
  if (mouseX < width / 2 && mouseY < height / 2) {
    a = a + 0.5;
    a += 0.5;
    a = constrain(a, 20, 400);
    b = b + 0.5;
    b += 0.5;
    b = constrain(b, 20, 400);
  }
  else if (mouseX < width / 2 && mouseY > height / 2) {
    a = a + 0.5;
    a += 0.5;
    a = constrain(a, 20, 400);
    b = b - 0.5;
    b -= 0.5;
    b = constrain(b, 20, 400);
  }
  else if (mouseX > width / 2 && mouseY < height / 2) {
    a = a - 0.5;
    a -= 0.5;
    a = constrain(a, 20, 400);
    b = b + 0.5;
    b += 0.5;
    b = constrain(b, 20, 400);
  }
  else {
    a = a - 0.5;
    a -= 0.5;
    a = constrain(a, 50, 400);
    b = b - 0.5;
    b -= 0.5;
    b = constrain(b, 50, 400);
  }
  noStroke();
  fill(redAmount, greenAmount, blueAmount);
  ellipse(x, y, a, b);
}

function drawSquare(x, y) {
  if (red > 8) {
    red = 8;
  }
  else if (red < 0.125) {
    red = 0.125;
  }
  if (green > 16) {
    green = 16;
  }
  else if (green < 0.25) {
    green = 0.25;
  }
  if (blue > 24) {
    blue = 24;
  }
  else if (red < 0.5) {
    blue = 0.5;
  }
  redAmount = redAmount + red;
  redAmount += red;
  redAmount = constrain(redAmount, 0, 255);
  if (redAmount === 255) {
    redAmount = 0;
  }
  greenAmount = greenAmount + green;
  greenAmount += green;
  greenAmount = constrain(greenAmount, 0, 255);
  if (greenAmount === 255) {
    greenAmount = 0;
  }
  blueAmount = blueAmount + blue;
  blueAmount += blue;
  blueAmount = constrain(blueAmount, 0, 255);
  if (blueAmount === 255) {
    blueAmount = 0;
  }
  if (mouseX < width / 2 && mouseY < height / 2) {
    a = a + 0.5;
    a += 0.5;
    a = constrain(a, 20, 400);
    b = b + 0.5;
    b += 0.5;
    b = constrain(b, 20, 400);
  }
  else if (mouseX < width / 2 && mouseY > height / 2) {
    a = a + 0.5;
    a += 0.5;
    a = constrain(a, 20, 400);
    b = b - 0.5;
    b -= 0.5;
    b = constrain(b, 20, 400);
  }
  else if (mouseX > width / 2 && mouseY < height / 2) {
    a = a - 0.5;
    a -= 0.5;
    a = constrain(a, 20, 400);
    b = b + 0.5;
    b += 0.5;
    b = constrain(b, 20, 400);
  }
  else {
    a = a - 0.5;
    a -= 0.5;
    a = constrain(a, 50, 400);
    b = b - 0.5;
    b -= 0.5;
    b = constrain(b, 50, 400);
  }
  noStroke();
  fill(redAmount, greenAmount, blueAmount);
  rect(x, y, a, b);
}

function keyPressed() {
  if (key === "a" || key === "A") {
    red = red*2;
    green = green*2;
    blue = blue*2;
  }
  else if (key === "b" || key === "B") {
    red = red/2;
    green = green/2;
    blue = blue/2;
  }
}

function mousePressed() {
  if (mouseButton === LEFT) {
    whichShape = 1;
  }
  else if (mouseButton === RIGHT) {
    whichShape = 2;
  }
}
