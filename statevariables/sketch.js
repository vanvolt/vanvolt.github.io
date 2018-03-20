//Assigning global variables
let state;
let groundLine;
let a;
let colourWidth, colourHeight;

//The canvas and setting the state to 1 and giving 'a' a value of 255 for the colour of white later on
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  state = 1;
  a = 255;
}

//The four states of the program and their corresponding functions
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

//The opening title screen which gives you the option to start playing
function startScreen() {
  background(230);

  let buttonWidth = 800;
  let buttonHeight = 150;
  let leftSide = width / 2 - buttonWidth / 2;
  let topSide = 50;
  let rightSide = leftSide + buttonWidth;
  let bottomSide = topSide + buttonHeight;
  let lowLeftSide = leftSide + buttonWidth/4;
  let lowTopSide = topSide + 200;
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
  text("Play", width/2, 350);
}

//This screen includes a colour select for your character which is just a simple circle
function characterSelect() {
  cursor(ARROW);

  groundLine = 5*height/7;
  background(50, 100, 200);
  fill(50, 250, 50);
  rect(-1, groundLine, width + 1, height + 1);

  noFill();
  rect(5*width/14, height/12, 8*width/14, 6*height/12);

  colourPallet();

  fill(a);
  ellipse(width/6, groundLine - 100, 200, 200);

  continueButton();
}

//I couldn't think of an interesting gameplay just yet, so a black screen with some key pressing is where I left it at
function gamePlay() {
  background(0);
  textAlign(LEFT);
  fill(255);
  textSize(18);
  text("Oops. Seems that you've fallen into a black hole. How exciting. Perhaps pressing a few buttons on your keyboard might get you out? I would try either 'b' or 'h' personally.", 50, 50);
  fill(a);
  ellipse(mouseX,mouseY,100,100);
}

//The game over screen
function endGame() {
  let millisecond = millis();
  background(200, 20, 20);
  noFill();
  rect(width/2 - 100, 3*height/4 - 45, 200, 55);
  textAlign(CENTER);
  fill(0);
  textSize(150);
  text("Game Over", width/2, height/2);
  textSize(40);
  text("(I guess not)", width/2, 3*height/16);
  textSize(45);
  text("Try again", width/2, 3*height/4);
  if (mouseX >= width/2 - 100 && mouseY >= 3*height/4 - 45 && mouseX <= width/2 + 100 && mouseY <= 3*height/4 + 10) {
    cursor(HAND);
    if (mouseIsPressed) {
      cursor(ARROW);
      state = 1;
    }
  }
  textSize(20);
  text("(If you'd like to of course. Maybe a different colour?)", width/2, 13*height/16);
}

//Allowing the program to resize to a changing screen
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

//This allows you to choose a colour for your character by taking the colour value of the pixel that you clicked on
function mouseClicked() {
  if (state === 2 && mouseX >= 5*width/14 && mouseY >= height/12 && mouseX <= 13*width/14 && mouseY <= 7*height/12) {
    a = get(mouseX, mouseY);
  }
}

//The continue bottom in the character select screen
function continueButton() {
  let buttonWidth = 400;
  let buttonHeight = 100;
  let leftSide = 7*width/8 - buttonWidth/2;
  let topSide = 7*height/8 - buttonHeight/2;
  let rightSide = leftSide + buttonWidth;
  let bottomSide = topSide + buttonHeight;

  fill(220);
  if (mouseX >= leftSide && mouseX <= rightSide && mouseY >= topSide && mouseY <= bottomSide) {
    cursor(HAND);
    fill(150, 50, 200);
    if (mouseIsPressed) {
      cursor(ARROW);
      state = 3;
    }
  }
  rect(leftSide, topSide, buttonWidth, buttonHeight);
  textAlign(CENTER);
  fill(0);
  textSize(70);
  text("Con't...", leftSide + buttonWidth/2, topSide + 13*buttonHeight/20);
}

//Each colour for the colour select took up quite a few lines, so I decided to put it together in a seperate function
function colourPallet() {
  colourWidth = 2*width/14;
  colourHeight = 2*height/12;

  fill(255, 0, 0);
  rect(5*width/14, height/12, colourWidth, colourHeight);
  fill(200, 150, 50);
  rect(7*width/14, height/12, colourWidth, colourHeight);
  fill(200, 50, 150);
  rect(9*width/14, height/12, colourWidth, colourHeight);
  fill(255);
  rect(11*width/14, height/12, colourWidth, colourHeight);

  fill(0, 255, 0);
  rect(5*width/14, 3*height/12, colourWidth, colourHeight);
  fill(150, 200, 50);
  rect(7*width/14, 3*height/12, colourWidth, colourHeight);
  fill(50, 200, 150);
  rect(9*width/14, 3*height/12, colourWidth, colourHeight);
  fill(125);
  rect(11*width/14, 3*height/12, colourWidth, colourHeight);

  fill(0, 0, 255);
  rect(5*width/14, 5*height/12, colourWidth, colourHeight);
  fill(50, 150, 200);
  rect(7*width/14, 5*height/12, colourWidth, colourHeight);
  fill(150, 50, 200);
  rect(9*width/14, 5*height/12, colourWidth, colourHeight);
  fill(0);
  rect(11*width/14, 5*height/12, colourWidth, colourHeight);
}

//Allowing to go from the game play to end screen, for now
function keyPressed() {
  if (key === "b" || key === "B" || state === 3) {
    state = 4;
  }
}
