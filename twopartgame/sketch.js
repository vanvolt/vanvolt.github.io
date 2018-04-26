
let space;
let troid, face, dizzy;
let choice;
let theTroids = [];

function preload() {
  space = loadImage("images/background-space.jpg");
  troid = loadImage("images/troy.png");
  face = loadImage("images/faceless.png");
  dizzy = loadImage("images/dizzy.png");

}

function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  background(space);
  moveTroids();
  displayTroids();
}

function moveTroids() {
  for (let i=0; i<theTroids.length; i++) {
    theTroids[i].x += theTroids[i].dx;
    theTroids[i].y += theTroids[i].dy;
  }
}

function displayTroids() {
  choice = random(0,3);
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

function mouseClicked() {
  let xs;
  let xl, yl;
  let side = random(100);
  if (side <= 50) {
    xl = 0;
    xs = random(3,7);
  }
  else if (side > 50) {
    xl = width;
    xs = random(-7, -3);
  }
  yl = random(50, height - 50);

  let aBall = {
    x: xl,
    y: yl,
    c: choice = random(0,3),
    dx: xs,
    dy: random(-2, 2),
  };
  theTroids.push(aBall);
}
