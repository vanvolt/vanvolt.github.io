
let space;
let troid, face, dizzy;
let choice;

function preload() {
  space = loadImage("images/background-space.jpg");
  troid = loadImage("images/troy.png");
  face = loadImage("images/faceless.png");
  dizzy = loadImage("images/dizzy.png");

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  choice = random(0,3);
}

function draw() {
  background(space);
  if (choice <= 1) {
    image(troid, mouseX - 100, mouseY - 80, 200, 160);
  }
  else if (choice >= 2) {
    image(face,  mouseX - 50, mouseY - 50, 100, 100);
  }
  else if (choice > 1 && choice < 2){
    image(dizzy,  mouseX - 48, mouseY - 48, 100, 100);
  }



  // fill(144, 0, 255);
  // ellipse(mouseX, mouseY, 50, 50);
}

function mousePressed() {
  choice = random(0,3);
}
