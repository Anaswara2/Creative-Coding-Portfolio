//Act 9:Data Visualization
let ageGroups = ["0-5", "6-12", "13-18", "19-29", "30-49", "50+"];
let screenTimeHours = [2, 4, 7.5, 6.8, 5.5, 4];
let colors = [];
let radii = [];
let hoverIndex = -1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  textAlign(CENTER, CENTER);
  noStroke();
  generateColors();
  generateRadii();
}

function draw() {
  background('#EFEFEF');
  let centerX = width / 2;
  let centerY = height / 2;
  let spacing = 100;

  // Display title
textSize(32);
fill(50);
textAlign(CENTER, TOP);
text("Daily Screen Time Across Age Groups", width / 2, 30);

  
  for (let i = 0; i < ageGroups.length; i++) {
    let angle = map(screenTimeHours[i], 0, 12, 0, 360);
    let x = centerX + cos(i * 60) * spacing * 2;
    let y = centerY + sin(i * 60) * spacing * 2;

    fill(colors[i]);
    arc(x, y, radii[i], radii[i], 0, angle, PIE);

    fill(0);
    textSize(12);
    text(ageGroups[i], x, y + radii[i] / 2 + 10);

    if (hoverIndex === i) {
      fill(0);
      textSize(14);
      text(`${screenTimeHours[i]} hrs/day`, x, y - radii[i] / 2 - 20);
    }
  }

  checkHover();
}

function generateColors() {
  for (let i = 0; i < ageGroups.length; i++) {
    colors.push(color(random(100, 255), random(150, 255), random(200, 255)));
  }
}

function generateRadii() {
  for (let i = 0; i < screenTimeHours.length; i++) {
    radii.push(map(screenTimeHours[i], 0, 12, 60, 120));
  }
}

function checkHover() {
  hoverIndex = -1;
  for (let i = 0; i < ageGroups.length; i++) {
    let x = width / 2 + cos(i * 60) * 200;
    let y = height / 2 + sin(i * 60) * 200;
    if (dist(mouseX, mouseY, x, y) < radii[i] / 2) {
      hoverIndex = i;
    }
  }
}
