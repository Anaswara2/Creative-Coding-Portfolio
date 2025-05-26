let font;
let particles = [];
let message = "DO THE THINGS THAT MATTER";
let fontSize = 60;
let canvas;

function preload() {
  font = loadFont("https://cdnjs.cloudflare.com/ajax/libs/topcoat/0.8.0/font/SourceCodePro-Regular.otf");
}

function setup() {
  canvas = createCanvas(1000, 1000);
  textFont(font);
  textSize(fontSize);
  noStroke();

  // Get exact text bounds
  let bounds = font.textBounds(message, 0, 0, fontSize);
  let x = width / 2 - bounds.w / 2;
  let y = height / 2 + bounds.h / 2;

  // Create particle points from text
  let points = font.textToPoints(message, x, y, fontSize, {
    sampleFactor: 0.25,
    simplifyThreshold: 0
  });

  for (let pt of points) {
    particles.push({
      homeX: pt.x,
      homeY: pt.y,
      x: pt.x + random(-20, 20),
      y: pt.y + random(-20, 20),
      glitchTimer: int(random(30, 90)),
      glitching: false
    });
  }
}

function draw() {
  background(15, 10, 25); // dark background

  let mouseInside = (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height);

  for (let p of particles) {
    if (mouseInside && p.glitching) {
      p.x += random(-2, 2);
      p.y += random(-2, 2);
    } else {
      p.x = lerp(p.x, p.homeX, 0.1);
      p.y = lerp(p.y, p.homeY, 0.1);
    }

    fill("#A020F0"); // Purple fill
    ellipse(p.x, p.y, 3);

    p.glitchTimer--;

    if (p.glitchTimer <= 0) {
      p.glitching = mouseInside;
      p.glitchTimer = int(random(30, 90));
    }
  }
}
