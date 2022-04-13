
function setup() {
    createCanvas(windowWidth, windowHeight);
    background("NavajoWhite");
  }

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    background("NavajoWhite");
  }
//   function setup() {
//     createCanvas(1000, 1000);
//     background("white");
//   }
  
  function draw() {
    stroke("black");
    strokeWeight(1);
    noFill();
    ellipse(mouseX, mouseY, 200, 200);
  }
      
  
  function mousePressed() {
   noStroke();
    if (mouseButton == LEFT) {
   fill(230, 230, 255);
    } else if (mouseButton == RIGHT) {
      fill(0, 0, 0); }
   ellipse(mouseX, mouseY, 200, 200);
  }