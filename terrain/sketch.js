// Terrain Generation
// Dan Schellenberg - replace with your name
// Mar 19, 2018

let heights = [];
let numberOfRectangles;

function setup() {
  createCanvas(windowWidth, windowHeight);
  numberOfRectangles = width;
  generateInitialTerrain(numberOfRectangles);
}

function draw() {
  background(255);
  displayTerrain();
  plantFlag();
}

function generateInitialTerrain(numberOfRectangles) {
  let time = 0;
  let dt = 0.006;

  for (let i=0; i<numberOfRectangles; i++) {
    let currentHeight = noise(time)*500;
    heights.push(currentHeight);
    time += dt;
  }
}

function displayTerrain() {
  let rectWidth = width / numberOfRectangles;
  rectMode(CORNERS);
  fill(0);
  stroke(0);
  for (let i=0; i<numberOfRectangles; i++) {
    rect(i*rectWidth, height, (i+1)*rectWidth, height - heights[i]);
  }
}

function plantFlag() {
  let rectWidth = width / numberOfRectangles;
  let highestX;
  let tallest = 0;
  for (let i=0; i<heights.length; i++) {
    if (heights[i] > tallest) {
      tallest = heights[i];
      highestX = i*rectWidth;
    }
  }

  let highestY = height - tallest;
  stroke(255, 0, 0);
  fill(255, 0, 0);
  line(highestX, highestY, highestX, highestY - 50);

  ellipse(highestX, highestY - 75, 50, 50);
}
