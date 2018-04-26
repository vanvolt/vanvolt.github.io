// Many Moving Balls
// Dan Schellenberg
// March 22, 2018

// global variables
let theBalls = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  moveBalls();
  displayBalls();
}

function moveBalls() {
  for (let i=0; i<theBalls.length; i++) {
    theBalls[i].x += theBalls[i].dx;
    theBalls[i].y += theBalls[i].dy;

    // if (theBalls[i].y < 0) {
    //   theBalls[i].y = height;
    // }
    // else if (theBalls[i].y > height) {
    //   theBalls[i].y = 0;
    // }
    //
    // if (theBalls[i].x < 0) {
    //   theBalls[i].x = width;
    // }
    // else if (theBalls[i].x > width) {
    //   theBalls[i].x = 0;
    // }
  }
}

function displayBalls() {
  for (let i=0; i<theBalls.length; i++) {
    fill(theBalls[i].color);
    noStroke();
    ellipse(theBalls[i].x, theBalls[i].y, theBalls[i].size, theBalls[i].size);
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
  yl = random(200, height - 200);

  let aBall = {
    x: xl,
    y: yl,
    size: random(10, 100),
    color: color(random(200), random(200), random(200)),
    dx: xs,
    dy: random(-2, 2),
  };
  theBalls.push(aBall);
}
