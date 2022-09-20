// get the start button
const start = document.getElementById("start");

// retrieve game area
const game = document.getElementById("game");

// retrieve the end button
const end = document.getElementById("end");
console.log(start);

// retrieve all boundary elements
const boundaries = document.getElementsByClassName("boundary");

// retrieve status message
const message = document.getElementById("status");

// create event for start button
start.addEventListener("click", function () {

  // reset status message
  message.style.color = "black";
  message.innerText = 'Begin by moving your mouse over the "S". ';

  // reset color of boundaries
  for (let i = 0; i < boundaries.length; i++) {
    boundaries.item(i).style.backgroundColor = "#EEEEEE";
  }

  // add event listener to check if the mouse leaves the game area
  game.addEventListener("mouseleave", fail)

  // add event listener to each boundary to detect if mouse hovers over them
  for (let i = 0; i < boundaries.length; i++) {
    boundaries.item(i).addEventListener("mouseover", fail);
  }

  end.addEventListener("mouseover", win);
});



function fail() {
  // write "you lose" status message
  message.style.color = "red";
  message.innerText = "You Have Lost"


  // change color of all boundaries if mouse hovers over all of them
  for (let j = 0; j < boundaries.length; j++) {
    boundaries.item(j).style.backgroundColor = "red";
  }
   
  end.removeEventListener("mouseover", win);

  
}

function win(){
  // write "you win" status message
  message.style.color = "green";
  message.innerText = "You have won"
  for (let i = 0; i < boundaries.length; i++) {
    boundaries.item(i).removeEventListener("mouseover", fail);
  }

  // remove game event listener
  game.removeEventListener("mouseleave", fail)
}

let accounts = [
  {
    username:"sleiman",
    password:"ghanem"
  },
  {
    username:"Charbel",
    password:"Daoud"
  }
]

window.localStorage.setItem("accounts", JSON.stringify(accounts));  




