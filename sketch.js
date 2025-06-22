let bubbles = [];

let cafe2;
let cafe1;

function preload() {
  cafe2 = loadImage('coffee_beans_PNG9271.png');
  cafe1 = loadImage('hot-coffee-cup-file-free-png.webp')
  
}

function setup() {
  createCanvas(600, 400);
  for (let i = 0; i < 10; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(50, 150);
    let b = new Bubble(x, y, r);
    bubbles.push(b);
  }
}

function mousePressed() {
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].clicked(mouseX, mouseY);
  }
}

function draw() {
  background(0);
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].show();
  }
}

class Bubble {
  constructor(x, y, r, img) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.kitten = (cafe2);
  }

  clicked(px, py) {
    if (
      px > this.x &&
      px < this.x + this.r &&
      py > this.y &&
      py < this.y + this.r
    ) {
      this.kitten = cafe1;
    }
  }

  move() {
    this.x = this.x + random(-2, 2);
    this.y = this.y + random(-2, 2);
  }

  show() {
    image(this.kitten, this.x, this.y, this.r, this.r);
  }
}
