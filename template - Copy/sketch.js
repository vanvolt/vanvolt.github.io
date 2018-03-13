let state;
let groundLine;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  state = 1;
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
  groundLine = 5*height/7;
  background(100, 100, 250);
  fill(50, 250, 50);
  rect(-1, groundLine, width + 1, height + 1);
  fill(255);
  ellipse(width/3, groundLine - 100, 200, 200);
  fill(55);
  rect(4*width/6, height/6, 1*width/6, height/2);
  // stroke(0);
  // for (let i = 0; i <= width; i+=width/20) {
  //   for (let j = 0; j <= width; j+=width/20) {
  //     line(i, 0, j, height);
  //   }
  // }
}

function gamePlay() {

}

function endGame() {

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
