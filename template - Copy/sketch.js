let ball = {
  x: 200,
  y: 300,
  radius: 50,
};

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  ball.x = mouseX;
  ball.y = mouseY;
  
  background(255);
  fill(0);
  ellipse(ball.x, ball.y, ball.radius, ball.radius);
}
