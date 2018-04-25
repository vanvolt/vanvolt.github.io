
let gear, space;

function preload() {
  gear = loadImage("images/gear.png");
  space = loadImage("desktop-cartoon-space-background-download.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(image(space,width,height));
}

function draw() {
  fill(0, 255, 0, 100);

  rect(mouseX, mouseY, 100, 300);
}
