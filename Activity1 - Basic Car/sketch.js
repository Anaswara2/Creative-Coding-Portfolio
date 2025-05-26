//Act 1: Car
function setup() {
  createCanvas(700, 500);
  background(200, 162, 200);
  noLoop();
}

function draw() {
  // Drawing fake Background to color the car
  noStroke();

  // Fake car body color
  fill(200, 162, 200); // purple color
  beginShape();
  vertex(140,150);
  bezierVertex(180,200,150,250,300,250);
  bezierVertex(400,250,450,250,500,150);
  endShape(CLOSE);

  // Fake roof color
  fill(200, 162, 200);
  beginShape();
  vertex(120,158);
  bezierVertex(170,40,140,30,290,30);
  bezierVertex(410,40,460,1,520,158);
  endShape(CLOSE);

  // Fake window color
  fill(135, 206, 235); // light blue
  beginShape();
  vertex(140,150);
  bezierVertex(180,50,150,40,300,40);
  bezierVertex(400,50,450,10,500,150);
  endShape(CLOSE);

  // Fake lights
  fill(255, 255, 100); // outer lights
  ellipse(110, 220, 75, 75);
  ellipse(520, 220, 75, 75);
  fill(255, 140, 0); // inner lights
  ellipse(110, 220, 50, 50);
  ellipse(520, 220, 50, 50);

  // Fake wheels
  fill(50);
  beginShape();
  vertex(80,350);
  bezierVertex(90,400,150,400,160,350);
  endShape(CLOSE);
  beginShape();
  vertex(560,350);
  bezierVertex(550,400,500,400,480,350);
  endShape(CLOSE);

  //Car Outline (strokes)
  noFill();
  stroke(0);
  strokeWeight(4);

  // Front line
  line(140,150,500,150);

  // Front window
  beginShape();
  vertex(140,150);
  bezierVertex(180,50,150,40,300,40);
  endShape();
  beginShape();
  vertex(300,40);
  bezierVertex(400,50,450,10,500,150);
  endShape();

  // Roof
  beginShape();
  vertex(120,158);
  bezierVertex(170,40,140,30,290,30);
  endShape();
  beginShape();
  vertex(290,30);
  bezierVertex(410,40,460,1,520,158);
  endShape();

  // Engine front
  beginShape();
  vertex(140,150);
  bezierVertex(180,200,150,250,300,250);
  endShape();
  beginShape();
  vertex(300,250);
  bezierVertex(400,250,450,250,500,150);
  endShape();

  // Internal engine lines
  beginShape();
  vertex(270,150);
  bezierVertex(270,180,275,200,250,244);
  endShape();
  beginShape();
  vertex(350,150);
  bezierVertex(350,180,355,200,380,244);
  endShape();
  ellipse(310,210,15,15); // circle between engine lines

  // Bottom curve
  beginShape();
  vertex(180,220);
  bezierVertex(150,290,450,290,451,220);
  endShape();

  // Side car body outlines
  beginShape();
  vertex(140,150);
  bezierVertex(40,180,50,200,60,350);
  endShape();
  beginShape();
  vertex(500,150);
  bezierVertex(590,180,590,200,580,350);
  endShape();

  // Bottom base line
  line(60,350,580,350);

  // Wheel outlines
  beginShape();
  vertex(80,350);
  bezierVertex(90,400,150,400,160,350);
  endShape();
  beginShape();
  vertex(560,350);
  bezierVertex(550,400,500,400,480,350);
  endShape();

  // Light outlines
  ellipse(110,220,75,75);
  ellipse(520,220,75,75);
  ellipse(110,220,50,50);
  ellipse(520,220,50,50);
}
