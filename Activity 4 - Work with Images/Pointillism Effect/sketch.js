var img, x, y;
function preload() {
img = loadImage("tree.jpg");
}

function setup() {
createCanvas (400, 400);
background(0);
noStroke();
}

function draw() {
x = random(width);
y = random(height);
var c = img.get(x, y); //Retrieves the color of the pixel at the mouse position (x, y); on the canvas
fill(c[0], c[1], c[2], 50); // array of values which is the red green blue colors and pass in the opacity value for the 4th one.
ellipse (x, y, 30, 30);
}
