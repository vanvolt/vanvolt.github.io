let mode;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  mode = 2;
}

function draw() {

  if (mouseX < (width / 2)) {
    fill(random(255), random(255));
    if (mode === 1) {
      rect(random(width), random(height), random(50,100), random(50, 100));
    }
    else if (mode === 2) {
      rect(random(width/2), random(height), random(50,100), random(50, 100));
    }
  }
  else {
    fill(random(255), random(255), random(255), random(255));
    if (mode === 1) {
      ellipse(random(width), random(height), random(50,100));
    }
    else if (mode === 2) {
      ellipse(random(width / 2, width), random(height), random(50,100));
    }
  }
}

function keyTyped() {
  if (key === "1") {
    mode = 1;
  }
  else if (key === "2") {
    mode = 2;
  }
}

function mouseIsPressed() {
  background(255)

}

//function draw() {
  //if (mouseX < width / 2) {
    // fill(random(255), random(255));
     //rect(random(width), random(height), random(50, 200), random(50, 200));
   //}
 //}
