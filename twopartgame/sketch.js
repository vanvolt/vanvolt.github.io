
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
    image(troid, mouseX - 100, mouseY - 85);
  }
  else if (choice >= 2) {
    image(face, mouseX - 225/2, mouseY - 225/2);
  }
  else if (choice > 1 && choice < 2){
    image(dizzy, mouseX - 173/2, mouseY - 179/2);
  }



  // fill(144, 0, 255);
  // ellipse(mouseX, mouseY, 50, 50);
}
