// Sketch Name: Interactive Mouse Trails
// This sketch creates a unique mouse trail using triangle-shaped particles that rotate and fade out

let particles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  noCursor(); // Hide default cursor for a clean look
}

function draw() {
  background(15, 15, 30, 40); // Dark bluish fading background

  // Add new particle at mouse location
  particles.push(new TriangleParticle(mouseX, mouseY));

  // Loop through particles in reverse
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].show();
    
    if (particles[i].isFinished()) {
      particles.splice(i, 1);
    }
  }
}

// TriangleParticle class
class TriangleParticle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.angle = random(360);
    this.rotationSpeed = random(-2, 2);
    this.size = random(10, 30);
    this.alpha = 255;
    this.color = color(random(100, 255), random(100, 255), random(255), this.alpha);
  }

  update() {
    this.angle += this.rotationSpeed;
    this.alpha -= 4;
  }

  isFinished() {
    return this.alpha < 0;
  }

  show() {
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    noStroke();
    fill(red(this.color), green(this.color), blue(this.color), this.alpha);
    triangle(-this.size, this.size, 0, -this.size, this.size, this.size);
    pop();
  }
}
