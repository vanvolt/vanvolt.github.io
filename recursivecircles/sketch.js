
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  let theLevel = map(mouseX, 0, width, 1, 8);
  drawCircle(width/2, height/2, width/2, theLevel);
  noStroke();
}

function drawCircle(x, y, radius, level) {
  let fillColour = 125 * level/4;
  fill(fillColour, 200);
  ellipse(x, y, radius*2, radius*2);

  if (level > 1) {
    level = level - 1;
    drawCircle(x - radius/2, y, radius/2, level);
    drawCircle(x + radius/2, y, radius/2, level);
    drawCircle(x, y - radius/2, radius/2, level);
    drawCircle(x, y + radius/2, radius/2, level);
  }
}
