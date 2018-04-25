let cain;
let catherine;

function setup() {
  createCanvas(windowWidth, windowHeight);
  cain = new Walker(width/2, height/2);
  catherine = new Walker(300, height/2, 0, 0, 255);
}

function draw() {
  cain.move();
  catherine.move();

  cain.display();
  catherine.display();

}

class Walker {
  constructor(x, y, r = 255, g = 0, b = 0) {
    this.x = x;
    this.y = y;
    this.radius = 10;
    this.color = color(r, g, b);
  }

  move() {
    let choice = random(100);
    if (choice < 25) {
      //move left
      this.x -= 5;
    }
    else if (choice < 50) {
      //move right
      this.x += 5;
    }
    else if (choice < 75) {
      //move up
      this.y -= 5;
    }
    else {
      //move down
      this.y += 5;
    }
  }
  display() {
    stroke(this.color);
    // fill(this.color);
    ellipse(this.x, this.y, this.radius, this.radius);
  }
}
