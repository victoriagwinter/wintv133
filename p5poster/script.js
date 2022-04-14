function setup() {
    createCanvas(windowWidth, windowHeight);
    background("White");
  }

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    background("White");
  
  }
//   function setup() {
//     createCanvas(1000, 1000);
//     background("white");
//   }
  
  function draw() {
    stroke("black");
    strokeWeight(3);
    // noFill();
    // ellipse(mouseX, mouseY, 200, 200);
    fill("black");
  ellipse(mouseX, mouseY, 100, 100);
 
  }
      
  
  function mousePressed() {
   noStroke();
    if (mouseButton == LEFT) {
   fill("white");
    } else if (mouseButton == RIGHT) {
      fill("white"); }
   ellipse(mouseX, mouseY, 250, 250);
  }

//   function setup() {
//     createCanvas(1000, 1000);
//     background("MediumSpringGreen");
//   }
  
//   function draw() {
//     noStroke();
//     fill(251,21,145, 30);
//     ellipse(mouseX, mouseY, 250, 250);
//   }