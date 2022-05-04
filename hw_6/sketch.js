let x 
let y
var bgColor;

function setup(){
  createCanvas(windowWidth,windowHeight);
// background("White");
bgColor = color( random(255), random(255), random(255) );
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background("White");}

  function draw(){
 x=random(0,width)
 y=mouseY
 noStroke()
 fill(random(0,255),random(0,255),random(0,255))
 ellipse(x,y,20,20)
//  background(bgColor);

}

function mousePressed() {
  bgColor = color( random(255), random(255), random(255) );
   noStroke();
    if (mouseButton == LEFT) {
   fill(random(0,255),random(0,255),random(0,255));
  //  ellipse(x,y,40,40);
    } else if (mouseButton == RIGHT) {
      fill(random(0,255),random(0,255),random(0,255)); }
      ellipse(x,y,60,60);
  }
 
 
// function changeToDarkMode() {
//     if(isDark === true) {
    
//     darkModeButton.textContent = "dark mode";
//     anythingIWant.style.background = "white";
//     anythingIWant.style.color = "black";
//     isDark = false;
//     console.log("dark mode is off.");
      
//     } else if(isDark === false){
      
//     darkModeButton.textContent = "light mode";
//     anythingIWant.style.background = "black";
//     anythingIWant.style.color = "white";
//     isDark = true;
//     console.log("dark mode is on!");
      
//     }
//   }
  