// Act 3: Alien
function setup() {
  createCanvas(700, 700);
}

function draw() {
background(105, 105, 105);// dark space background

  noStroke();

  // 1. Alien face (light green fill)
  fill(144, 238, 144); // light green
  ellipse(300, 130, 90, 130);

  // 2. Alien eyes (black slanted)
  push();
  translate(285, 120);
  rotate(radians(-15));
  fill(0);
  ellipse(0, 0, 15, 30);
  pop();

  push();
  translate(315, 120);
  rotate(radians(15));
  fill(0);
  ellipse(0, 0, 15, 30);
  pop();

  // 3. Alien body (same green)
  fill(144, 238, 144);
  beginShape();
  vertex(285, 192);
  bezierVertex(210, 220, 400, 220, 317, 192);
  endShape();

  // 4. Dome (blue glass)
  fill(173, 216, 230, 150);
  beginShape();
  vertex(170, 192);
  bezierVertex(180, 0, 410, 0, 420, 192);
  endShape();

  // 5. UFO body (grey)
  fill(169, 169, 169);
  beginShape();
  vertex(170, 172);
  bezierVertex(10, 240, 0, 300, 308, 300);
  endShape();

  beginShape();
  vertex(308, 300);
  bezierVertex(600, 300, 610, 240, 420, 172);
  endShape();

  beginShape();
  vertex(63, 260);
  bezierVertex(100, 340, 500, 340, 546, 260);
  endShape();

  // 6. UFO bottom (darker grey)
  fill(105, 105, 105);
  beginShape();
  vertex(150, 307);
  bezierVertex(200, 400, 400, 400, 460, 305);
  endShape();

  // ==== STROKES (ON TOP OF FILLS) ====

  stroke(0);
  strokeWeight(3);

  // Alien head outline
  noFill();
  ellipse(300, 130, 90, 130);

  // Body outline
  beginShape();
  vertex(285, 192);
  bezierVertex(210, 220, 400, 220, 317, 192);
  endShape();

  // Dome outline
  beginShape();
  vertex(170, 192);
  bezierVertex(180, 0, 410, 0, 420, 192);
  endShape();

  // Dome lines
  strokeWeight(2);
  beginShape();
  vertex(170, 192);
  bezierVertex(180, 220, 410, 220, 420, 192);
  endShape();

  beginShape();
  vertex(170, 192);
  bezierVertex(180, 240, 410, 240, 420, 192);
  endShape();

  // UFO body outline
  beginShape();
  vertex(170, 172);
  bezierVertex(10, 240, 0, 300, 308, 300);
  endShape();

  beginShape();
  vertex(308, 300);
  bezierVertex(600, 300, 610, 240, 420, 172);
  endShape();

  beginShape();
  vertex(63, 260);
  bezierVertex(100, 340, 500, 340, 546, 260);
  endShape();

  // UFO bottom outline
  beginShape();
  vertex(150, 307);
  bezierVertex(200, 400, 400, 400, 460, 305);
  endShape();

  // Lines on the UFO
  line(187, 210, 61, 250);
  line(270, 229, 210, 298);
  line(345, 225, 420, 297);
  line(400, 210, 548, 250);

  // Wires/beams under the UFO
  line(240, 370, 220, 550);
  line(260, 400, 250, 580);
  line(300, 380, 300, 550);
  line(340, 400, 350, 580);
  line(360, 370, 380, 550);

  // Alien smile
  strokeWeight(2);
  arc(300, 165, 20, 25, 0, PI);


// === Yellow lights on bottom lines ===
noStroke();

function drawLight(x, y) {
  // Glow
  fill(255, 255, 100, 80); // translucent yellow glow
  ellipse(x, y, 20, 20);
  // Core light
  fill(255, 255, 0);
  ellipse(x, y, 8, 8);
}

// Lights on each hanging line
drawLight(220, 500);
drawLight(250, 530);
drawLight(300, 520);
drawLight(350, 540);
drawLight(380, 500);
}
