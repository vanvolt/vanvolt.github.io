// p5js template project - replace with project title
// Dan Schellenberg - replace with your name
// Feb 2, 2018 - replace with the date

// global variables
let gear;
let x, y;
// the preload function guarentees that the code inside the function is
// executed before the rest of the program runs -- helpful for things
// like loading images (since JS is asynchronous)
function preload() {
  gear = loadImage("images/gear.png");
}

// the setup function will only run once (before the draw loop begins)
// this is where you want to set up the environment (size of canvas, etc)
function setup() {
  createCanvas(windowWidth, windowHeight);
  document.addEventListener("contextmenu", event => event.preventDefault());
  x = width / 2;
  y = height / 2;
}

function draw() {

}

function deviceShaken() {
  x = random(0, width / 2);
  y = random(0, height);

  fill(2);
  textFont("Arial");
  textAlign(CENTER);
  textSize(32);
  text("Shaken, not stirred.", x, y);
}

function mousePressed() {
  noStroke();
  fill(random(255), random(255), random(255), random(255));

  if (mouseButton === LEFT) {
    rect(mouseX, mouseY, random(50, 150), random(50, 150));
  }

  else if (mouseButton === RIGHT) {
    ellipse(mouseX, mouseY, random(50, 150), random(50, 150));
  }
}

function keyPressed() {
  if (key === 'w' || key === 'W') {
    background(255);
  }
  else if (key === 'b' || key === 'B') {
    background(0);
  }
}
