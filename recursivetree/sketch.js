let theta;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  stroke(255);

  let theAngle = map(mouseX, 0, width, 0, 90);
  theta = theAngle;
  let branchSize = height/3;

  //trunk
  translate(width/2, height);
  line(0, 0, 0, -branchSize);

  translate(0, -branchSize);

  //recursing
  branch(branchSize);

}

function branch(length) {
  length *= 2/3;

  if (length > 3) {
    push();
    rotate(theta);
    line(0, 0, 0, -length);
    translate(0, -length);
    branch(length);
    pop();

    push();
    rotate(-theta);
    line(0, 0, 0, -length);
    translate(0, -length);
    branch(length);
    pop();
  }
}
