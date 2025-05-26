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
background(0);
x = mouseX;
y = mouseY;
image( img, 0, 0);
var c = get(x, y); //Retrieves the color of the pixel at the mouse position (x, y) on the canvas and stores it in the variable c.
fill(c); //Sets the fill color for shapes drawn on the canvas to the color sampled from the image.
ellipse (x, y, 100, 100); //Draws an ellipse at the current mouse position (x, y)with a diameter of 100 pixels, filled with the color sampled from the image.
}
