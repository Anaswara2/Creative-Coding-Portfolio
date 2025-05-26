//Act 5: Pattern
function setup() {
  createCanvas(400, 400);
  noLoop(); // Static pattern
}

function draw() {
  
  let gridSize = 50; // Size of each triangle block
  for (let x = 0; x < width; x += gridSize) {
    for (let y = 0; y < height; y += gridSize) {
      
      let randomColor = color(random(100, 255), random(100, 255), random(100, 255));
      let flip = random() > 0.5; // Randomly decide triangle orientation
      
      fill(randomColor);
      stroke(255);
      strokeWeight(2);
      
      if (flip) {
        triangle(x, y, x + gridSize, y, x, y + gridSize);
      } else {
        triangle(x + gridSize, y, x + gridSize, y + gridSize, x, y + gridSize);
      }
    }
  }
}
