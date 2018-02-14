function setup() {
  createCanvas(windowWidth, windowHeight);
  background(50);
}

function draw() {

  drawCircle(mouseX, mouseY);

}

function drawCircle (x, y) {

    noStroke();
    fill(random(255), random(255), random(255), random(255));
    ellipse(x, y, 100, 100)
}
