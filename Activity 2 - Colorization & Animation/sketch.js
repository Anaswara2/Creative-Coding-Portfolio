//Act 2: (Hot Air Balloon) Colorization & Animation
let balloonY = 0;
let moving = true; 

// Cloud
let clouds = [
  { x: 150, y: 100, size: 60, direction: 1 },
  { x: 500, y: 200, size: 60, direction: -1 },
  { x: 120, y: 310, size: 50, direction: 1 },
  { x: 450, y: 400, size: 40, direction: -1 }
];

function setup() {
  createCanvas(600, 600);
  colorMode(RGB);
  noStroke();
}

function draw() {
  drawSunsetGradient();

  // Move clouds
  for (let cloud of clouds) {
    if (moving) {
      cloud.x += 0.1 * cloud.direction;
    }
    drawCloud(cloud.x, cloud.y, cloud.size);
  }

  // Basket
  fill('#745638');
  stroke(0);
  rect(250, 490 + balloonY, 55, 40, 8);

  // Ropes
  stroke(0);
  strokeWeight(2);
  line(255, 490 + balloonY, 230, 450 + balloonY);
  line(255, 490 + balloonY, 260, 430 + balloonY);
  line(300, 490 + balloonY, 320, 450 + balloonY);
  line(300, 490 + balloonY, 290, 430 + balloonY);

  // Balloon
  fill('#E34B4B');
  beginShape();
  vertex(225, 435 + balloonY);
  bezierVertex(50, 170 + balloonY, 500, 170 + balloonY, 325, 435 + balloonY);
  endShape();

  rect(225, 430 + balloonY, 100, 20, 8); // Top band

  drawBalloonLines(balloonY); // balloon lines

  if (moving) {
    balloonY -= 1;
  }

  // Stop motion when balloon is out of the frame
  if (balloonY < -500) {
    moving = false;
  }
}

// Gradient background
function drawSunsetGradient() {
  for (let y = 0; y < height; y++) {
    let inter = map(y, 0, height, 0, 1);
    let c1 = color(255, 120, 0);
    let c2 = color(255, 230, 100);
    let c = lerpColor(c1, c2, inter);
    stroke(c);
    line(0, y, width, y);
  }
}

// Balloon lines
function drawBalloonLines(balloonMove) {
  beginShape();
  vertex(235, 435 + balloonMove);
  bezierVertex(210, 400 + balloonMove, 205, 300 + balloonMove, 220, 252 + balloonMove);
  endShape();

  beginShape();
  vertex(260, 435 + balloonMove);
  bezierVertex(240, 400 + balloonMove, 235, 300 + balloonMove, 250, 239 + balloonMove);
  endShape();

  beginShape();
  vertex(275, 435 + balloonMove);
  bezierVertex(270, 400 + balloonMove, 260, 300 + balloonMove, 270, 239 + balloonMove);
  endShape();

  beginShape();
  vertex(299, 435 + balloonMove);
  bezierVertex(300, 400 + balloonMove, 310, 300 + balloonMove, 290, 239 + balloonMove);
  endShape();

  beginShape();
  vertex(310, 435 + balloonMove);
  bezierVertex(330, 400 + balloonMove, 350, 370 + balloonMove, 320, 248 + balloonMove);
  endShape();
}

// Clouds
function drawCloud(x, y, size) {
  fill(255);
  noStroke();
  ellipse(x, y, size, size);
  ellipse(x - size * 0.6, y, size * 0.8, size * 0.8);
  ellipse(x + size * 0.6, y, size * 0.8, size * 0.8);
  ellipse(x - size * 0.3, y - size * 0.3, size * 0.7, size * 0.7);
  ellipse(x + size * 0.3, y - size * 0.3, size * 0.7, size * 0.7);
}
