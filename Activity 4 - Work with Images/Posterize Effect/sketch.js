let img;
const levels = 5; // number of color levels

function preload() {
  img = loadImage('tree.jpg'); // replace with your image URL or path
}

function setup() {
  createCanvas(img.width, img.height);
  img.loadPixels();

  for (let i = 0; i < img.pixels.length; i += 4) {
    img.pixels[i] = posterize(img.pixels[i], levels);       // Red
    img.pixels[i + 1] = posterize(img.pixels[i + 1], levels); // Green
    img.pixels[i + 2] = posterize(img.pixels[i + 2], levels); // Blue
    // Alpha remains unchanged
  }
  img.updatePixels();

  noLoop();
}

function draw() {
  background(255);
  image(img, 0, 0);
}

function posterize(value, levels) {
  let step = 255 / (levels - 1);
  return round(value / step) * step;
}
