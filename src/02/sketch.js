var barWidth = 20;
var lastBar = -1;

function setup() {
  resizeCanvas(windowWidth-20, windowHeight-20);
  colorMode(HSB, width, height, 100); 
  noStroke();
}

function draw() {
  var whichBar = mouseX / barWidth;
  if (whichBar != lastBar) {
    var barX = whichBar * barWidth;
    fill(barX, mouseY, 66);
    rect(barX, 0, barWidth, height);
    lastBar = whichBar;
  }
}

function windowResized() {
  resizeCanvas(windowWidth-20, windowHeight-20);
}

