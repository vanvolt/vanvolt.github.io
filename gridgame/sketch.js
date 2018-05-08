//Setting global variables
let rows = 9;
let cols = 9;
let cellSize;
let grid;
let state, page;
let sudokuGridinitial = [[0,0,5,0,0,8,0,9,0], [0,0,0,6,5,0,0,0,0], [0,2,6,9,0,0,0,0,0], [4,0,9,0,0,1,0,6,0], [0,0,0,0,0,5,3,0,0], [0,0,0,0,0,7,0,2,0], [2,0,0,3,0,6,9,0,7], [0,1,3,0,2,0,6,5,0], [0,8,0,0,1,9,0,0,2]];
let sudokuGridOriginal = [[0,0,5,0,0,8,0,9,0], [0,0,0,6,5,0,0,0,0], [0,2,6,9,0,0,0,0,0], [4,0,9,0,0,1,0,6,0], [0,0,0,0,0,5,3,0,0], [0,0,0,0,0,7,0,2,0], [2,0,0,3,0,6,9,0,7], [0,1,3,0,2,0,6,5,0], [0,8,0,0,1,9,0,0,2]];
let sudokuGridsolved = [[3,4,5,1,7,8,2,9,6], [8,9,1,6,5,2,7,4,3], [7,2,6,9,4,3,5,8,1], [4,7,9,2,3,1,8,6,7], [1,6,2,8,9,5,3,7,4], [5,3,8,4,6,7,1,2,9], [2,5,4,3,8,6,9,1,7], [9,1,3,7,2,4,6,5,8], [6,8,7,5,1,9,4,3,2]];

//Creating the screen
function setup() {
  if (windowWidth > windowHeight) {
    createCanvas(windowHeight, windowHeight);
  }
  else {
    createCanvas(windowWidth, windowWidth);
  }
  cellSize = width / cols;
  grid = sudokuGridinitial;
  page = 1;
}

//Differentiation between when I need the home screen and when I should be playing the game
function draw() {
  background(255);
  if (page === 1) {
    startScreen();
  }
  else if (page === 2) {
    grid = sudokuGridinitial;
    sudokuGrid();
  }
}

//A simple start sreen with a "play" button and instructions
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
  fill(0);
  textSize(80);
  text("Sudoku", width/2, 150);

  fill(220);
  if (mouseX >= lowLeftSide && mouseX <= lowRightSide && mouseY >= lowTopSide && mouseY <= lowBottomSide) {
    cursor(HAND);
    fill(100);
    if (mouseIsPressed) {
      cursor(ARROW);
      page = 2;
    }
  }
  rect(lowLeftSide, lowTopSide, buttonWidth/2, buttonHeight);
  textAlign(CENTER);
  fill(0);
  textSize(70);
  text("Start", width/2, 350);

  fill(0);
  textSize(18);
  text("R to start, C to continue, S to see solved puzzle, and O to return to the home screen.", width/2, height - 70);
  text("Press the number on your keyboard that you wish to enter into the space before clicking the box.", width/2, height - 50);
}

//The game grid
function sudokuGrid() {
  for (let x=0; x<cols; x++) {
    for (let y=0; y<rows; y++) {
      //Setting up the start of the sudoku puzzle
      if (grid[x][y] === sudokuGridOriginal[x][y]) {
        if (grid[x][y] === 0) {
          fill(255);
          rect(x*cellSize, y*cellSize, cellSize, cellSize);
        }
        else {
          fill(255);
          rect(x*cellSize, y*cellSize, cellSize, cellSize);
          fill(255, 0, 0);
          textSize(30);
          text(grid[x][y], x * cellSize + cellSize/2, y * cellSize + 3*cellSize/5);
        }
      }
      //Letting the player know if they've made a mistake
      else if (grid[x][y] !== sudokuGridOriginal[x][y]) {
        if (grid[x][y] === 0) {
          fill(255);
          rect(x*cellSize, y*cellSize, cellSize, cellSize);
        }
        else {
          fill(255);
          rect(x*cellSize, y*cellSize, cellSize, cellSize);
          fill(0);
          textSize(30);
          text(grid[x][y], x * cellSize + cellSize/2, y * cellSize + 3*cellSize/5);
        }
      }
      //Making sure that when they press the start button they don't accidentally enter a value into one of the boxes, as well as making sure that if a box has a value of "0" that it doesn't still show that it is incorrect
      if (grid[x][y] !== sudokuGridsolved[x][y]) {
        if (grid[x][y] === 0 && grid[x][y] !== " ") {
          fill(255);
          rect(x*cellSize, y*cellSize, cellSize, cellSize);
        }
        else if (grid[x][y] !== " ") {
          fill(100);
          rect(x*cellSize, y*cellSize, cellSize, cellSize);
          fill(0, 0, 255);
          textSize(30);
          text(grid[x][y], x * cellSize + cellSize/2, y * cellSize + 3*cellSize/5);
        }
      }
    }
  }
}

//All the different keys that you'll be using the play
function keyPressed() {
  //Reset
  if (key === "r" || key === "R") {
    sudokuGridinitial = [[0,0,5,0,0,8,0,9,0], [0,0,0,6,5,0,0,0,0], [0,2,6,9,0,0,0,0,0], [4,0,9,0,0,1,0,6,0], [0,0,0,0,0,5,3,0,0], [0,0,0,0,0,7,0,2,0], [2,0,0,3,0,6,9,0,7], [0,1,3,0,2,0,6,5,0], [0,8,0,0,1,9,0,0,2]];
    grid = sudokuGridinitial;
  }
  //Continue
  else if (key === "c" || key === "C") {
    grid = sudokuGridinitial;
  }
  //Check the answers
  else if (key === "a" || key === "A") {
    grid = solveSudokuGrid(cols, rows);
  }
  //Choose which number to input
  if (page === 2) {
    if (key === "1") {
      state = 1;
    }
    else if (key === "2") {
      state = 2;
    }
    else if (key === "3") {
      state = 3;
    }
    else if (key === "4") {
      state = 4;
    }
    else if (key === "5") {
      state = 5;
    }
    else if (key === "6") {
      state = 6;
    }
    else if (key === "7") {
      state = 7;
    }
    else if (key === "8") {
      state = 8;
    }
    else if (key === "9") {
      state = 9;
    }
    else if (key === "0") {
      state = 0;
    }
  }
  else if (page === 1) {
    state = 0;
  }
  //Return to home screen
  if (key === "o" || key === "O") {
    page = 1;
  }
}

//Inputting the desired number into a selected box
function mousePressed() {
  let xcoord = floor(mouseX / cellSize);
  let ycoord = floor(mouseY / cellSize);
  fill(0);
  if (grid === solveSudokuGrid()) {
    state = 0;
  }
  else if (grid === sudokuGridinitial) {
    for (let x=0; x<cols; x++) {
      for (let y=0; y<rows; y++) {
        if (sudokuGridOriginal[xcoord][ycoord] === 0) {
          if (state === 1) {
            grid[xcoord][ycoord] = 1;
          }
          if (state === 2) {
            grid[xcoord][ycoord] = 2;
          }
          if (state === 3) {
            grid[xcoord][ycoord] = 3;
          }
          if (state === 4) {
            grid[xcoord][ycoord] = 4;
          }
          if (state === 5) {
            grid[xcoord][ycoord] = 5;
          }
          if (state === 6) {
            grid[xcoord][ycoord] = 6;
          }
          if (state === 7) {
            grid[xcoord][ycoord] = 7;
          }
          if (state === 8) {
            grid[xcoord][ycoord] = 8;
          }
          if (state === 9) {
            grid[xcoord][ycoord] = 9;
          }
          if (state === 0) {
            grid[xcoord][ycoord] = " ";
          }
        }
      }
    }
  }
}

//The solved grid such that it can't be tampered with or changed
function solveSudokuGrid(cols, rows) {
  let sudokuGridsolved = [[3,4,5,1,7,8,2,9,6], [8,9,1,6,5,2,7,4,3], [7,2,6,9,4,3,5,8,1], [4,7,9,2,3,1,8,6,7], [1,6,2,8,9,5,3,7,4], [5,3,8,4,6,7,1,2,9], [2,5,4,3,8,6,9,1,7], [9,1,3,7,2,4,6,5,8], [6,8,7,5,1,9,4,3,2]];
  return sudokuGridsolved;
}
