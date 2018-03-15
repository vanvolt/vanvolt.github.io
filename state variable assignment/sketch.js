let state, colour;
let groundLine;
let a, b, c;
let colourSize, ballSize;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  state = 1;
  a = 255;
  b = 255;
  c = 255;

}

function draw() {
  if (state === 1) {
    startScreen();
  }
  else if (state === 2) {
    characterSelect();
  }
  else if (state === 3) {
    gamePlay();
  }
  else if (state === 4) {
    endGame();
  }

  if (width > height) {
    colourSize = 3*height/48;
  }
  else {
    colourSize = 3*width/48;
  }
}

function startScreen() {
  background(230);

  let buttonWidth = 800;
  let buttonHeight = 150;
  let leftSide = width / 2 - buttonWidth / 2;
  let topSide = 50;
  let rightSide = leftSide + buttonWidth;
  let bottomSide = topSide + buttonHeight;
  let lowLeftSide = leftSide + buttonWidth/4;
  let lowTopSide = topSide + 300;
  let lowRightSide = width/2 + buttonWidth/4;
  let lowBottomSide = lowTopSide + buttonHeight;

  cursor(ARROW);

  fill(180);
  rect(leftSide, topSide, buttonWidth, buttonHeight);
  textAlign(CENTER);
  fill(0, 255, 0);
  textSize(80);
  text("Welcome home", width/2, 150);

  fill(220);
  if (mouseX >= lowLeftSide && mouseX <= lowRightSide && mouseY >= lowTopSide && mouseY <= lowBottomSide) {
    cursor(HAND);
    fill(255, 0, 0);
    if (mouseIsPressed) {
      cursor(ARROW);
      state = 2;
    }
  }
  rect(lowLeftSide, lowTopSide, buttonWidth/2, buttonHeight);
  textAlign(CENTER);
  fill(0);
  textSize(70);
  text("Play", width/2, 450);

}

function characterSelect() {

  //
  // colourSize = 3*width/48;
  groundLine = 5*height/7;
  background(100, 100, 250);
  fill(50, 250, 50);
  rect(-1, groundLine, width + 1, height + 1);

  fill(55);
  rect(5*width/14, height/12, 8*width/14, 6*height/12);

  fill(255, 0, 0);
  ellipse(6*width/14, 2*height/12, colourSize, colourSize);
  fill(255, 100, 100);
  ellipse(8*width/14, 2*height/12, colourSize, colourSize);
  fill(255, 200, 200);
  ellipse(10*width/14, 2*height/12, colourSize, colourSize);
  fill(255);
  ellipse(12*width/14, 2*height/12, colourSize, colourSize);

  fill(0, 255, 0);
  ellipse(6*width/14, 4*height/12, colourSize, colourSize);
  fill(100, 255, 100);
  ellipse(8*width/14, 4*height/12, colourSize, colourSize);
  fill(200, 255, 200);
  ellipse(10*width/14, 4*height/12, colourSize, colourSize);
  fill(125);
  ellipse(12*width/14, 4*height/12, colourSize, colourSize);

  fill(0, 0, 255);
  ellipse(6*width/14, 6*height/12, colourSize, colourSize);
  fill(100, 100, 255);
  ellipse(8*width/14, 6*height/12, colourSize, colourSize);
  fill(200, 200, 255);
  ellipse(10*width/14, 6*height/12, colourSize, colourSize);
  fill(0);
  ellipse(12*width/14, 6*height/12, colourSize, colourSize);

  let a = get(mouseX, mouseY);
  // stroke(0);
  // for (let i = 0; i <= width; i+=width/20) {
  //   for (let j = 0; j <= width; j+=width/20) {
  //     line(i, 0, j, height);
  //   }
  // }
  fill(a);
  ellipse(width/6, groundLine - 100, 200, 200);
}

function gamePlay() {

}

function endGame() {

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
