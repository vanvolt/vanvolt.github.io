let x;
let y;
let isMovingUp, isMovingDown, isMovingRight, isMovingLeft;

function setup() {
  createCanvas(windowWidth,windowHeight);
  x = width/2;
  y = height/2;
  isMovingUp = false;
  isMovingDown = false;
  isMovingLeft = false;
  isMovingRight = false;
}

function draw() {
  background(255);

  function keyPressed() {
  noStroke();
  fill(random(255), random(255), random(255), random(255));
  ellipse(random(0, width), random(0, height), random(50, 200), random(50, 200));
}

function mouseClicked() {
  noStroke();
  fill(random(255), random(255), random(255), random(255));
  rect(mouseX, mouseY, random(50, 200), random(50, 200));
}

  if (keyIsPressed) {
    moveStickman();
  }

  drawStcikman(mouseX, mouseY);
  drawStcikman(x, y);
}

function keyPressed() {
  if (key === 'w' || key == 'W') {
    isMovingUp = true;
  }
  else if (key === 's' || key == 'S') {
    isMovingDown = true;
  }
  if (key === 'a' || key == 'A') {
    isMovingLeft = true;
  }
  else if (key === 'd' || key == 'D') {
    isMovingRight = true;
  }
}

function moveStickman() {
  if (isMovingUp) {
    y -= 10;
  }
  if (isMovingDown) {
    y += 10;
  }
  if (isMovingLeft) {
    x -= 10;
  }
  if (isMovingRight) {
    x += 10;
  }
}

function keyReleased() {
  if (key === 'w' || key == 'W') {
    isMovingUp = false;
  }
  if (key === 's' || key == 'S') {
    isMovingDown = false;
  }
  if (key === 'a' || key == 'A') {
    isMovingLeft = false;
  }
  if (key === 'd' || key == 'D') {
    isMovingRight = false;
  }
}

function drawStcikman(x, y) {

  fill(255,255,255);
  ellipse(x,y,100,100);

  line(x,y+50,x,y+200);
  line(x,y+200,x-50,y+300);
  line(x,y+200,x+50,y+300);
  line(x-100,y+100,x+100,y+100);

  fill(255,0,0);
  rect(x-70,y-60,140,20);

  fill(0,0,255);
  rect(x-50,y-140,100,80);

}
