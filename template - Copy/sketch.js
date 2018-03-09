let state;

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
  background(100, 200, 100);
  rect(500, 500, 100, 100);

}

function gamePlay() {

}

function endGame() {

}
