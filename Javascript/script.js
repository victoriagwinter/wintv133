// similar to terminal with its own commands and communicatr with various elements, the console is the purest
// form of what javascrip is
// console.log(100-500);
// we can store information in containers to make layouts more efficient//
// anytime we use a . we are calling on something
// without the console.log we wont be doing anything with anythingIWant.style
// ex.
// var anythingIWant = document.querySelector("h1");
// anythingIWant.style.color = "pink";
// document.querySelector("h1");
// you can put this inside the console.log element, which communicates to the website console
// console.log(document.querySelector("h1"));/

var anythingIWant = document.body;
var isDark = false;

var darkModeButton = document.getElementById("buttonDarkMode");
darkModeButton.addEventListener("click", changeToDarkMode);

function changeToDarkMode() {
  if(isDark === true) {
  
  darkModeButton.textContent = "dark mode";
  anythingIWant.style.background = "white";
  anythingIWant.style.color = "rgb(132, 90, 170)";
  isDark = false;
  console.log("dark mode is off.");
    
  } else if(isDark === false){
    
  darkModeButton.textContent = "light mode";
  anythingIWant.style.background = "black";
  anythingIWant.style.color = "white";
  isDark = true;
  console.log("dark mode is on!");
    
  }
}

var random = Math.random();
console.log(random);
console.log(random > 0.5);

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 3 seconds
}
(function (document) {
    const markers = [...document.querySelectorAll('mark')];
    
    const observer = new IntersectionObserver(entries => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          entry.target.style.animationPlayState = 'running';
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.8
    });
    
    markers.forEach(mark => {
      observer.observe(mark);
    });
  })(document);

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}