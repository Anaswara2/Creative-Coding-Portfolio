//Act 11: (Individual) Interactive Art
let particles = [];
let shapes = ['circle', 'square', 'triangle'];
let currentShape = 0;
let morphing = false;
let morphProgress = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 50; i++) {
    particles.push(new Particle(i, 150));
  }
  noStroke();
}

function draw() {
  background(30);

  if (morphing) {
    morphProgress += 0.03;
    if (morphProgress >= 1) {
      morphProgress = 0;
      morphing = false;
      currentShape = (currentShape + 1) % shapes.length;
    }
  }

  for (let p of particles) {
    p.update();
    p.display();
  }
}

function mouseMoved() {
  for (let p of particles) {
    p.setCenter(mouseX, mouseY);
  }
}

function mouseClicked() {
  if (!morphing) morphing = true;
}

class Particle {
  constructor(index, radius) {
    this.index = index;
    this.radius = radius;
    this.centerX = width / 2;
    this.centerY = height / 2;
    this.pos = createVector(0, 0);
    this.targetPos = createVector(0, 0);
    this.size = 10;
    this.color = color(random(150, 255), random(150, 255), random(150, 255));
    this.angle = map(index, 0, 50, 0, TWO_PI);
  }

  setCenter(x, y) {
    this.centerX = x;
    this.centerY = y;
  }

  getShapePos(shape, angle, radius) {
    if (shape === 'circle') {
      return createVector(this.centerX + cos(angle) * radius, this.centerY + sin(angle) * radius);
    } else if (shape === 'square') {
      let side = radius * 2;
      let perimeter = side * 4;
      let pos = (angle / TWO_PI) * perimeter;

      if (pos < side) {
        return createVector(this.centerX - radius + pos, this.centerY - radius);
      } else if (pos < 2 * side) {
        return createVector(this.centerX + radius, this.centerY - radius + (pos - side));
      } else if (pos < 3 * side) {
        return createVector(this.centerX + radius - (pos - 2 * side), this.centerY + radius);
      } else {
        return createVector(this.centerX - radius, this.centerY + radius - (pos - 3 * side));
      }
    } else if (shape === 'triangle') {
      let v1 = createVector(this.centerX, this.centerY - radius);
      let v2 = createVector(this.centerX - radius * sin(PI / 3), this.centerY + radius / 2);
      let v3 = createVector(this.centerX + radius * sin(PI / 3), this.centerY + radius / 2);

      let perimeter = 3 * (2 * radius);
      let pos = (angle / TWO_PI) * perimeter;

      if (pos < 2 * radius) {
        let t = pos / (2 * radius);
        return p5.Vector.lerp(v1, v2, t);
      } else if (pos < 4 * radius) {
        let t = (pos - 2 * radius) / (2 * radius);
        return p5.Vector.lerp(v2, v3, t);
      } else {
        let t = (pos - 4 * radius) / (2 * radius);
        return p5.Vector.lerp(v3, v1, t);
      }
    }
  }

  update() {
    let fromShape = shapes[currentShape];
    let toShape = shapes[(currentShape + 1) % shapes.length];

    let fromPos = this.getShapePos(fromShape, this.angle, this.radius);
    let toPos = this.getShapePos(toShape, this.angle, this.radius);

    if (morphing) {
      this.targetPos = p5.Vector.lerp(fromPos, toPos, morphProgress);
    } else {
      this.targetPos = fromPos;
    }

    this.pos.lerp(this.targetPos, 0.1);
  }

  display() {
    fill(this.color);
    ellipse(this.pos.x, this.pos.y, this.size);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
