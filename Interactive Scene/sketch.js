//seting up all global variables
let redAmount, greenAmount, blueAmount;
let red, green, blue;
let a, b, c;
let whichShape,aBackGround;

//setup
function setup() {
  c = random(255);
  createCanvas(windowWidth, windowHeight);
  background(c);
  document.addEventListener("contextmenu", event => event.preventDefault());
  redAmount = 10;
  greenAmount = 15;
  blueAmount = 20;
  a = 100;
  b = 100;
  // c = random(255);
  red = 1;
  green = 2;
  blue = 3;
  whichShape = 1;
  aBackGround = 1;
}

//creating the draw loop to be able to change shapes and backgrounds
function draw() {
  if (aBackGround === 1) {
    background(c);
  }
  if (whichShape === 1) {
    drawCircle(mouseX, mouseY);
  }
  if (whichShape === 2) {
    drawSquare(mouseX - a / 2, mouseY - b / 2);
  }
}

//drawing the circle
function drawCircle(x, y) {
  shapeChange();
  noStroke();
  fill(redAmount, greenAmount, blueAmount);
  ellipse(x, y, a, b);
}

//drawing the square
function drawSquare(x, y) {
  shapeChange();
  noStroke();
  fill(redAmount, greenAmount, blueAmount);
  rect(x, y, a, b);
}

//creating how whichever shape that's being drawing will change colour
function shapeChange() {
  //creating limits to the size of the shape
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
  //creating limits to the rate at which the shape can change colour
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
    a = constrain(a, 20, 300);
    b = b + 0.5;
    b += 0.5;
    b = constrain(b, 20, 300);
  }
  else if (mouseX < width / 2 && mouseY > height / 2) {
    a = a + 0.5;
    a += 0.5;
    a = constrain(a, 20, 300);
    b = b - 0.5;
    b -= 0.5;
    b = constrain(b, 20, 300);
  }
  else if (mouseX > width / 2 && mouseY < height / 2) {
    a = a - 0.5;
    a -= 0.5;
    a = constrain(a, 20, 300);
    b = b + 0.5;
    b += 0.5;
    b = constrain(b, 20, 300);
  }
  else {
    a = a - 0.5;
    a -= 0.5;
    a = constrain(a, 20, 300);
    b = b - 0.5;
    b -= 0.5;
    b = constrain(b, 20, 300);
  }
}

//using the keyboard to change the rate of colour change, freeze and restart the loop, and change whether or not the background will update every second
function keyPressed() {
  if (key === "a" || key === "A") {
    noLoop();
  }
  else if (key === "w" || key === "W") {
    loop();
  }
  else if (key === "s" || key === "S") {
    red = red*2;
    green = green*2;
    blue = blue*2;
  }
  else if (key === "d" || key === "D") {
    red = red/2;
    green = green/2;
    blue = blue/2;
  }
  else if (key === "q" || key === "Q"){
    aBackGround = 2;
  }
  else if (key === "e" || key === "E"){
    aBackGround = 1;
  }
}

//using the mouse buttons to flip between a circle and a square
function mousePressed() {
  if (mouseButton === LEFT) {
    whichShape = 1;
  }
  else if (mouseButton === RIGHT) {
    whichShape = 2;
  }
}
