let clockSize;

function setup() {
  createCanvas(windowWidth, windowHeight);
  if (width > height) {
    clockSize = height * 0.9;
  }
  else {
    clockSize = width * 0.9;
  }
  angleMode(DEGREES);
}

function draw() {
  background(255);

  push();

  translate(width/2, height/2);

  strokeWeight(clockSize/80);
  ellipse(0, 0, clockSize, clockSize);

  strokeWeight(clockSize/80);
  strokeCap(SQUARE);

  for (let i = 0; i < 12; i++) {
    line(0, -clockSize/2*0.95, 0, -clockSize/2*0.75);
    rotate(360/12);
  }
  strokeWeight(clockSize/160);
  for (let i = 0; i < 60; i++) {
    line(0, -clockSize/2*0.95, 0, -clockSize/2*0.85);
    rotate(360/60);
  }

  fill(0);
  ellipse(0,0,4,4);

  pop();

  // fill(255);
  // ellipse(0, 0, 400, 400);
  //
  // fill(0);
  // ellipse(0, 0, 3, 3);
}
