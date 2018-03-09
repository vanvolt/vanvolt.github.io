let xballCoords = [50];
let yballCoords = [200];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // background(255);

  for (let i=0; i<xballCoords.length; i++) {
    fill(random(255), random(255), random(255));
    ellipse(xballCoords[i], yballCoords[i], 50, 50);
  }
}

function mousePressed() {
  xballCoords.push(mouseX);
  yballCoords.push(mouseY);
}
