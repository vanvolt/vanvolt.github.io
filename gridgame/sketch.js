let rows = 9;
let cols = 9;
let cellSize;
let grid;
let state;

function setup() {
  if (windowWidth > windowHeight) {
    createCanvas(windowHeight, windowHeight);
  }
  else {
    createCanvas(windowWidth, windowWidth);
  }
  cellSize = width / cols;
  grid = resetSudokuGrid();
}

function draw() {
  background(255);
  sudokuGrid();
}

function sudokuGrid() {
  for (let x=0; x<cols; x++) {
    for (let y=0; y<rows; y++) {
      if (grid[x][y] === 0) {
        fill(255);
        rect(x*cellSize, y*cellSize, cellSize, cellSize);
      }
      else {
        fill(255);
        rect(x*cellSize, y*cellSize, cellSize, cellSize);
        fill(0);
        textSize(30);
        text(grid[x][y], x * cellSize + 2*cellSize/5, y * cellSize + 3*cellSize/5);
      }
    }
  }
}

function keyPressed() {
  if (key === "r" || key === "R") {
    grid = resetSudokuGrid(cols, rows);
  }
  else if (key === "c" || key === "C") {
    grid = solveSudokuGrid(cols, rows);
  }
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
}

function mousePressed() {
  let xcoord = floor(mouseX / cellSize);
  let ycoord = floor(mouseY / cellSize);

  if (grid[xcoord][ycoord] === 0) {
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
  }
}

function resetSudokuGrid(cols, rows) {
  let sudokuGridinitial = [[0,0,5,0,0,8,0,9,0], [0,0,0,6,5,0,0,0,0], [0,2,6,9,0,0,0,0,0], [4,0,9,0,0,1,0,6,0], [0,0,0,0,0,5,3,0,0], [0,0,0,0,0,7,0,2,0], [2,0,0,3,0,6,9,0,7], [0,1,3,0,2,0,6,5,0], [0,8,0,0,1,9,0,0,2]];
  return sudokuGridinitial;
}

function solveSudokuGrid(cols, rows) {
  let sudokuGridsolved = [[1,2,3,4,5,6,7,8,9], [2,3,4,5,6,7,8,9,1], [3,4,5,6,7,8,9,1,2], [4,5,6,7,8,9,1,2,3], [5,6,7,8,9,1,2,3,4], [6,7,8,9,1,2,3,4,5], [7,8,9,1,2,3,4,5,6], [8,9,1,2,3,4,5,6,7], [9,1,2,3,4,5,6,7,8]];
  return sudokuGridsolved;
}

// function nextTurn() {
//   let next = createEmpty2dArray(cols, rows);
//   for (let x=0; x<cols; x++) {
//     for (let y=0; y<rows; y++) {
//
//       let neighbors = 0;
//       for (let i=-1; i<=1; i++) {
//         for (let j=-1; j<=1; j++) {
//           //don't break on the edges
//           if (x+i >= 0 && x+i < cols && y+j >= 0 && y+j < rows) {
//             neighbors += grid[x+i][y+j];
//           }
//         }
//       }
//       neighbors -= grid[x][y];
//
//       // apply the rules of the game
//       if (grid[x][y] === 1) { //is alive
//         if (neighbors === 2 || neighbors === 3) {
//           next[x][y] = 1;
//         }
//         else {
//           next[x][y] = 0;
//         }
//       }
//       else { //is dead
//         if (neighbors === 3) {
//           next[x][y] = 1;
//         }
//         else{
//           next[x][y] = 0;
//         }
//       }
//     }
//   }
//   grid = next;
// }
