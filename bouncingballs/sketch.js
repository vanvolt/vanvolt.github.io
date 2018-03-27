let theBalls = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  moveBalls();
  displaceBalls();
}

function mouseClicked() {
  let aBall = {
    x: mouseX,
    y: mouseY,
    size: random(10, 100),
    color: color(random(50, 180), random(50, 180), random(50, 180)),
    dx: random(-10, 10),
    dy: random(-10, 10),
  };
  theBalls.push(aBall);
}

function moveBalls() {
  for (let i=0; i<theBalls.length; i++) {
    theBalls[i].x += theBalls[i].dx;
    theBalls[i].y += theBalls[i].dy;

    if (theBalls[i].y < 0) {
      theBalls[i].y = height;
    }
    else if (theBalls.y > height) {
      theBalls[i].y = 0;
    }

    if (theBalls[i].x < 0) {
      theBalls[i].x = width;
    }
    else if (theBalls[i].x > width) {
      theBalls[i].x = 0;
    }
  }
}

function displaceBalls() {
  for (let i=0; i<theBalls.length; i++) {
    fill(theBalls[i].color);
    noStroke();
    ellipse(theBalls[i].x, theBalls[i].y, theBalls[i].size, theBalls[i].size);
  }
}
