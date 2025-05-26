let song;
let fft;
let amplitude;

function preload() {
  song = loadSound('drums.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  fft = new p5.FFT();
  amplitude = new p5.Amplitude();
  song.loop();
  noStroke();
}

function draw() {
  background(30, 30, 50, 100);

  translate(width / 2, height / 2);

  let level = amplitude.getLevel(); // Get amplitude level
  let wave = fft.waveform();        // Get waveform array
  let radius = map(level, 0, 0.3, 100, 400); // Pulse size

  // Wavy circular shape
  fill(200, 100, 255, 100);
  beginShape();
  for (let t = 0; t < TWO_PI; t += 0.01) {
    let i = floor(map(t, 0, TWO_PI, 0, wave.length - 1));
    let r = radius + wave[i] * 200;
    let x = r * cos(t);
    let y = r * sin(t);
    vertex(x, y);
  }
  endShape(CLOSE);

  // Dancing floating circles
  for (let i = 0; i < 20; i++) {
    let angle = map(i, 0, 20, 0, TWO_PI);
    let r = radius + sin(frameCount * 0.02 + i) * 50;
    let x = r * cos(angle);
    let y = r * sin(angle);
    fill(255, 200, 255, 150);
    ellipse(x, y, 10 + level * 100);
  }
}

function mousePressed() {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.loop();
  }
}
