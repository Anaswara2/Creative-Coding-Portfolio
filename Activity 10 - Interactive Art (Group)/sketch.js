let messageTop = "WELCOME TO";
let messageBottom = "BATH SPA UNIVERSITY";
let droplets = [];
let font;

let SCATTERED = 0;
let ASSEMBLING = 1;
let WAVING = 2;

let state = SCATTERED;
let assembled = false;

let assembleTimer = 0;
let waveTimer = 0;

const ASSEMBLE_DURATION = 3000;  // milliseconds after hover before waves start
const WAVE_DURATION = 3000;      // wave duration in ms

function preload() {
  font = loadFont('https://cdnjs.cloudflare.com/ajax/libs/topcoat/0.8.0/font/SourceCodePro-Regular.otf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(font);
  textSize(100);
  fill(255);
  textAlign(CENTER, CENTER);

  resetDroplets();
}

function resetDroplets() {
  droplets = [];

  let boundsTop = font.textBounds(messageTop, 0, 0, 100);
  let startXTop = width / 2 - boundsTop.w / 2 - boundsTop.x;
  let startYTop = height / 2 - 60;

  let pointsTop = font.textToPoints(messageTop, startXTop, startYTop, 100, { sampleFactor: 0.2 });

  let boundsBottom = font.textBounds(messageBottom, 0, 0, 100);
  let startXBottom = width / 2 - boundsBottom.w / 2 - boundsBottom.x;
  let startYBottom = height / 2 + 80;

  let pointsBottom = font.textToPoints(messageBottom, startXBottom, startYBottom, 100, { sampleFactor: 0.2 });

  let allPoints = pointsTop.concat(pointsBottom);

  for (let pt of allPoints) {
    droplets.push({
      // Start scattered anywhere
      x: random(width),
      y: random(height),
      // Target positions (text points)
      tx: pt.x,
      ty: pt.y,
      r: random(5, 12),
      c: color(0, 150 + random(50), 255, 180),
      // For wave calculations
      angle: random(TWO_PI),
      distance: 0
    });
  }

  state = SCATTERED;
  assembled = false;
  assembleTimer = 0;
  waveTimer = 0;
}

function draw() {
  background(0);

  if (state === SCATTERED) {
    // Just random drifting droplets
    for (let d of droplets) {
      noStroke();
      fill(d.c);
      ellipse(d.x, d.y, d.r);

      // Drifting motion
      d.x += random(-1.5, 1.5);
      d.y += random(-1.5, 1.5);

      // Keep droplets inside canvas
      d.x = constrain(d.x, 0, width);
      d.y = constrain(d.y, 0, height);
    }

  } else if (state === ASSEMBLING) {
    // Droplets move towards their text positions
    for (let d of droplets) {
      noStroke();
      fill(d.c);
      ellipse(d.x, d.y, d.r);

      d.x = lerp(d.x, d.tx, 0.05);
      d.y = lerp(d.y, d.ty, 0.05);
    }

    // After ASSEMBLE_DURATION milliseconds, start wave
    if (millis() - assembleTimer > ASSEMBLE_DURATION) {
      state = WAVING;
      waveTimer = millis();
      // Initialize distance for wave effect
      for (let d of droplets) {
        // Distance from center to droplet target position
        let centerX = width / 2;
        let centerY = height / 2;
        d.distance = dist(d.tx, d.ty, centerX, centerY);
        // angle already random assigned
      }
    }

  } else if (state === WAVING) {
    // Wave moves droplets outward like a ripple

    let waveElapsed = millis() - waveTimer;
    let waveProgress = waveElapsed / WAVE_DURATION; // 0 to 1

    // Parameters for wave effect
    let centerX = width / 2;
    let centerY = height / 2;
    let maxWaveRadius = max(width, height);

    for (let d of droplets) {
      noStroke();
      fill(d.c);

      // Wave radius grows from 0 to maxWaveRadius
      let waveRadius = waveProgress * maxWaveRadius;

      // Calculate wave offset: droplets near waveRadius are pushed outward
      let diff = d.distance - waveRadius;
      // Use a sinusoidal ripple around waveRadius with some width
      let rippleWidth = 50;
      let waveEffect = 0;

      if (abs(diff) < rippleWidth) {
        // Sinusoidal push outward
        waveEffect = sin(map(diff, -rippleWidth, rippleWidth, -PI, PI)) * 100;
      }

      // Move droplet position by waveEffect in angle direction
      d.x = d.tx + cos(d.angle) * waveEffect;
      d.y = d.ty + sin(d.angle) * waveEffect;

      ellipse(d.x, d.y, d.r);
    }

    // When wave finishes, reset to scattered state
    if (waveElapsed > WAVE_DURATION) {
      resetDroplets();
    }
  }
}

function mouseMoved() {
  if (state === SCATTERED) {
    state = ASSEMBLING;
    assembleTimer = millis();
  }
}

function mouseOut() {
  // Optional: if you want to reset on mouse out, uncomment:
  // resetDroplets();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  resetDroplets();
}
