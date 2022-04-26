
console.log("Hello, Airtable");

let wrapper = document.querySelector(".container");

// load the airtable library, call it "Airtable"
let Airtable = require("airtable");
console.log(Airtable);

// use the airtable library, connect to our base using API key
let base = new Airtable({ apiKey: "keyXfgdNIcv7dW63l" }).base(
"appWiQM0htfVBj9RL"
);

//get the "books" table from the base, select ALL the records, and specify the functions that will receive the data
base("nature_sounds").select({}).eachPage(gotPageOfSounds, gotAllSounds);

// an empty array to hold our book data
let sounds = [];

// callback function that receives our data
function gotPageOfSounds(records, fetchNextPage) {
console.log("gotPageOfSounds()");
// add the records from this page to our books array
sounds.push(...records);
// request more pages
fetchNextPage();
}

// call back function that is called when all pages are loaded
function gotAllSounds(err) {
console.log("gotAllSounds()");

// report an error, you'd want to do something better than this in production
if (err) {
console.log("error loading sounds");
console.error(err);
return;
}

// call functions to log and show the books
consoleLogSounds();
showSounds();
}

// just loop through the books and console.log them
function consoleLogSounds() {
console.log("consoleLogSounds()");
sounds.forEach((sound) => {
//   console.log("Sound:", sound);
});
}

// THIS IS THE FOR EACH APPROACH
// loop through the books, create an h2 for each one, and add it to the page
// function showSounds() {
// // console.log("showSounds()");
// sounds.forEach((sound) => {
//     console.log(sound);
//   let soundTextHolder = document.createElement("div"); // victoria u changed it from h2 to div dont forget//
//   soundTextHolder.classList.add("entry");
//   soundTextHolder.innerText = sound.fields.emotion;
// //   soundTextHolder.classList.add(sound.fields.emotion.toString());
//   wrapper.appendChild(soundTextHolder);
//   let soundColor = sound.fields.color_hex_code;
//   soundTextHolder.style.backgroundColor = soundColor;



//    let audioHolder = document.createElement("audio");
//    audioHolder.src = sound.fields.audio_file[0].url;
//    audioHolder.classList.add("soundClass");
//    audioHolder.controls = true;
//     audioHolder.autoplay = true;
//    audioHolder.loop = true;
//    soundTextHolder.appendChild(audioHolder);

// });
// }

let audioHolder;
let soundTextHolder;

function showSounds() {
  for(let i = 0; i < sounds.length; i++) {
      soundTextHolder = document.createElement("div");
      soundTextHolder.classList.add("entry");
      //added in entry and i
      soundTextHolder.classList.add("entry" + i);
      soundTextHolder.innerText = sounds[i].fields.emotion;
      wrapper.appendChild(soundTextHolder);
      let soundColor = sounds[i].fields.color_hex_code;
      soundTextHolder.style.backgroundColor = soundColor;
  
    audioHolder = document.createElement("audio");
    audioHolder.src = sounds[i].fields.audio_file[0].url;
    audioHolder.classList.add("soundClass");
    audioHolder.controls = true;
    audioHolder.autoplay = false;
    audioHolder.loop = false;
    soundTextHolder.appendChild(audioHolder);  
    soundTextHolder.addEventListener("click", show);
 
 // here, you want to add an onclick="" function
     function show(){
       console.log("test");
        audioHolder.classList.toggle("active");
        soundTextHolder.classList.toggle("active");
        console.log(audioHolder)
        audioHolder.classList.toggle("active");
        audioHolder.autoplay = true;
   }


  }


}

var anythingIWant = document.body;
var isDark = false;

var darkModeButton = document.getElementById("buttonDarkMode");
darkModeButton.addEventListener("click", changeToDarkMode);

function changeToDarkMode() {
  if(isDark === true) {
  
  darkModeButton.textContent = "dark mode";
  anythingIWant.style.background = "white";
  anythingIWant.style.color = "black";
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

// document.querySelectorAll('.entry').forEach((element, index) => {
//     element.classList.add(`unique-${index}`)
//   })
// for (let i = 0; i < array.length; i +++){
//     let div = createElement("div"); 
//     if ()
// }
//  sound reveal on click /// 



// trying to aniamte//


// var divsize = 5,
//    divcount = 50;
// var gRows = Math.floor($(".container").innerWidth() / divsize);
// var gCols = Math.floor($('.container').innerHeight() / divsize);

// var vals = _.shuffle(_.range(divcount));
// var xpos = _.shuffle(_.range(gRows));
// var ypos = _.shuffle(_.range(gCols));

// _.each(vals, function(d, i) {
//   var $newdiv = $('<div/>').addClass("div");
//   $newdiv.css({
//     'position': 'absolute',
//     'left': (xpos[i] * divsize) + 'px',
//     'top': (ypos[i] * divsize) + 'px'
//   }).appendTo('.container').html(d);
//   animateDiv();
// });



// function newPosition() {

//   // Get viewport dimensions (remove the dimension of the div)
//   var h = $('.container').height() - 50;
//   var w = $('.container').width() - 50;

//   var newh = Math.floor(Math.random() * h);
//   var neww = Math.floor(Math.random() * w);

//   return [newh, neww];

// }

// function animateDiv() {
//   var newp = newPosition();
//   var oldp = $('div').offset();
//   var speed = 3000;
//   $('div').animate({
//     top: newp[0],
//     left: newp[1]
//   }, speed, function() {
//     animateDiv();
//   });

// };


// $(document).ready(function(){
//     animateDiv('soundTextHolder');
  
// });
























