let ariesURL = "https://cdn.glitch.global/09726a4f-501f-4563-b9ca-b5c458004390/aries.png?v=1651799739636";

let geminiURL = "https://cdn.glitch.global/09726a4f-501f-4563-b9ca-b5c458004390/gemini.png?v=1651800006502";

let leoURL = "https://cdn.glitch.global/09726a4f-501f-4563-b9ca-b5c458004390/leo.png?v=1651799996851";

let taurusURL = "https://cdn.glitch.global/09726a4f-501f-4563-b9ca-b5c458004390/taurus.png?v=1651799973279";

let virgoURL = "https://cdn.glitch.global/09726a4f-501f-4563-b9ca-b5c458004390/virgo.png?v=1651799959304";

let sagittariusURL = "https://cdn.glitch.global/09726a4f-501f-4563-b9ca-b5c458004390/sagittarius.png?v=1651799891515";

let pisciesURL = "https://cdn.glitch.global/09726a4f-501f-4563-b9ca-b5c458004390/piscies.png?v=1651799878475";

let libraURL = "https://cdn.glitch.global/09726a4f-501f-4563-b9ca-b5c458004390/libra.png?v=1651799869150";

let scorpioURL = "https://cdn.glitch.global/09726a4f-501f-4563-b9ca-b5c458004390/scorpio.png?v=1651799856203";

let capricornURL = "https://cdn.glitch.global/09726a4f-501f-4563-b9ca-b5c458004390/capricorn.png?v=1651799829991";

let cancerURL = "https://cdn.glitch.global/09726a4f-501f-4563-b9ca-b5c458004390/cancer.png?v=1651799814972";

let aquariusURL = "https://cdn.glitch.global/09726a4f-501f-4563-b9ca-b5c458004390/aquarius.png?v=1651799807599";



let inputElement = document.querySelector("#input");
let result = document.querySelector("#result");

function showResult() {
  let date = inputElement.value;

  // create an image
  let selectedCard = document.createElement("img");

  // july
  if(date.includes("-07-")) { 
    console.log("it's july");
    selectedCard.src = cancerURL;
    // set image source to july image
    // set image whatever to day image
  } 
  if(date.includes("-08-")) { 
    console.log("it's august");
    selectedCard.src = leoURL;
    // set image source to july image
    // set image whatever to day image
  } 
  if(date.includes("-09-")) { 
    console.log("it's september");
    selectedCard.src = virgoURL;
    // set image source to july image
    // set image whatever to day image
  } 
  if(date.includes("-10-")) { 
    console.log("it's october");
    selectedCard.src = libraURL;
    // set image source to july image
    // set image whatever to day image
  }
  if(date.includes("-11-")) { 
    console.log("it's november");
    selectedCard.src = scorpioURL;
    // set image source to july image
    // set image whatever to day image
  }
  if(date.includes("-12-")) { 
    console.log("it's december");
    selectedCard.src = sagittariusURL;
    // set image source to july image
    // set image whatever to day image
  }
  if(date.includes("-01-")) { 
    console.log("it's january");
    selectedCard.src = capricornURL;
    // set image source to july image
    // set image whatever to day image
  }
  if(date.includes("-02-")) { 
    console.log("it's february");
    selectedCard.src = aquariusURL;
    // set image source to july image
    // set image whatever to day image
  }
  if(date.includes("-03-")) { 
    console.log("it's march");
    selectedCard.src = pisciesURL;
    // set image source to july image
    // set image whatever to day image
  }
  if(date.includes("-04-")) { 
    console.log("it's april");
    selectedCard.src = ariesURL;
    // set image source to july image
    // set image whatever to day image
  }
  if(date.includes("-05-")) { 
    console.log("it's may");
    selectedCard.src = taurusURL;
    // set image source to july image
    // set image whatever to day image
  }
  if(date.includes("-06-")) { 
    console.log("it's june");
    selectedCard.src = geminiURL;
    
    // set image source to july image
    // set image whatever to day image
  }

  // append image
  result.appendChild(selectedCard);
 
}


function display (selected)
  {
  if (selected == 'firstbox')
    {
    texttoshow = "the text related to first box should be displayed";
    }
  else if (selected == 'secondbox')
    {
    texttoshow = "Text related to 2nd box.";
    }
  document.getElementById("thetext").innerHTML = texttoshow;
  }





// OLD STUFF
// inputElement.addEventListener("keydown", function(event){
//     if (event.key == "Enter"){
//         // show text on page // 
//         console.log(inputElement.value);
//         let name = inputElement.value;
//         console.log(name);
//         inputElement.value = "";

//         // Create a new HTML image element for the card
//         let selectedCard = document.createElement("img");

//         // JUST LOOK AT FIRST 4 LETTERS OF INPUT 
//         for (let i = 0; i < 4; i++){
    
//           // Print the number we're at in the loop
//           console.log(i);
          
//           // Get the i-th letter in the name
//           let letter = name[i];
          
//           // If letter is any of these, use the devil card
//           if (["0", "b", "c", "d", "e", "f"].includes(letter)){
//             selectedCard.src = ariesURL;
//           }
          
//           // If letter is any of these, use the magician card
//           if (["05/22", "h", "i", "j", "k", "l"].includes(letter) ){
//             selectedCard.src = geminiURL;
//           }
          
//           // If letter is any of these, use the star card
//           if (["m", "n", "o", "p", "q", "r"].includes(letter)){
//             selectedCard.src = cancerURL;
//           }
          
//           // If letter is any of these, use the moon card
//           if (["s", "t", "u", "v", "w", "x", "y", "z"].includes(letter)){
//             selectedCard.src = libraURL;
//           }
          
//         }

//         result.appendChild(selectedCard);
        
//       }
// })
