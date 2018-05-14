
let space;
let troid, face, dizzy;
let choice;
let theTroids = [];
let flightTime;
let btTime;
let me = 1;

function preload() {
  space = loadImage("images/background-space.jpg");
  troid = loadImage("images/troy.png");
  face = loadImage("images/faceless.png");
  dizzy = loadImage("images/dizzy.png");

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  btTime = 1000;
  flightTime = millis();
}

function draw() {
  if (millis() > flightTime + btTime) {
    let xs;
    let xl, yl;
    let side = random(100);
    if (side <= 50) {
      xl = 1;
      xs = random(4, 7);
    }
    else if (side > 50) {
      xl = width - 1;
      xs = random(-7, -4);
    }
    yl = random(0, height - 0);

    let aBall = {
      x: xl,
      y: yl,
      c: choice = random(0,3),
      dx: xs,
      dy: random(-2, 2),
    };
    theTroids.push(aBall);
    flightTime = millis();
    btTime = random(100, 1000);
  }
  background(space);
  moveTroids();
  displayTroids();
}

function moveTroids() {
  for (let i=0; i<theTroids.length; i++) {
    theTroids[i].x += theTroids[i].dx;
    theTroids[i].y += theTroids[i].dy;

    if (theTroids[i].x <= - 50 || theTroids[i].x >= width + 50) {
      theTroids.splice(i, 1);
    }
  }
}

function displayTroids() {
  
  for (let i=0; i<theTroids.length; i++) {
    if (theTroids[i].c <= 1) {
      image(troid, theTroids[i].x - 100, theTroids[i].y - 80, 200, 160);
    }
    else if (theTroids[i].c >= 2) {
      image(face, theTroids[i].x - 50, theTroids[i].y - 50, 100, 100);
    }
    else if (theTroids[i].c > 1 && theTroids[i].c < 2){
      image(dizzy, theTroids[i].x - 50, theTroids[i].y - 50, 100, 100);
    }
  }
}
