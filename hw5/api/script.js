// fetch('https://jsonplaceholder.typicode.com/todos')
//   .then(response => response.json())
//   .then(json => console.log(json))
  
//  var ul = document.querySelector("ul");
//   {
//  	"userId": 1,
//  	"id": 1,
//  	"title": "delectus aut autem",
//  	"completed": false
//  }
// fetch('https://jsonplaceholder.typicode.com/todos')
//             .then(function (response) {
//                 return response.json();
//             })
//             .then(function (data) {
//                 appendData(data);
//             })
//             .catch(function (err) {
//                 console.log(err);
//             });
//         function appendData(data) {
//             var mainContainer = document.getElementById("myData");
//             for (var i = 0; i < data.length; i++) {
//                 var div = document.createElement("ul");
//                 div.innerHTML = 'Name: ' + data[i].firstName + ' ' + data[i].lastName;
//                 mainContainer.appendChild(ul);
//             }
//         }

fetch('https://jsonplaceholder.typicode.com/todos/')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data);
  })
  .catch(function (err) {
    console.log(err);
  });


  function appendData(data) {
    var mainContainer = document.getElementById("myData");
    for (var i = 0; i < data.length; i++) {
      console.log(data[i]);

      // create div, put data into it
      var div = document.createElement("div");
      div.innerHTML = data[i].userId + ' ' + data[i].title + ' ' + data[i].completed;

      //based on completion
      if(data[i].completed === true) {
        div.style.textDecoration = "line-through";
      }

      // based on userId
      if(data[i].userId === 2 || data[i].userId === 4 || data[i].userId === 6) {
        div.style.color = "red";
      }

      // based on i
      // if(i > 8) {
      //   div.style.background = 'white';
      //   div.style.color = 'blue';
      // }

      mainContainer.appendChild(div);

    }
  }
