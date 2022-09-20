// get the start button
const start = document.getElementById("start");

// retrieve game area
const game = document.getElementById("game");

// retrieve the end button
const end = document.getElementById("end");

// retrieve all boundary elements
const boundaries = document.getElementsByClassName("boundary");

// retrieve status message
const message = document.getElementById("status");

console.log("hello");
// retrieve register message
const registerbutton = document.getElementById("register");

// retrieve register message
const loginbutton = document.getElementById("login");

// current user(will be used in login function)
let user = "";
// create event for start button
start.addEventListener("click", function () {
  // reset status message
  message.style.color = "black";
  message.innerText = 'Begin by moving your mouse over the "S". ';

  game.classList.remove("youlose");
  // reset color of boundaries
  for (let i = 0; i < boundaries.length; i++) {
    boundaries.item(i).style.backgroundColor = "#EEEEEE";
  }

  // add event listener to check if the mouse leaves the game area
  game.addEventListener("mouseleave", fail);

  // add event listener to each boundary to detect if mouse hovers over them
  for (let i = 0; i < boundaries.length; i++) {
    boundaries.item(i).addEventListener("mouseover", fail);
  }

  end.addEventListener("mouseover", win);
});

registerbutton.addEventListener("click", register);

function fail() {
  // write "you lose" status message
  message.style.color = "red";
  message.innerText = "You Have Lost";

  // change color of all boundaries if mouse hovers over all of them
  for (let j = 0; j < boundaries.length; j++) {
    boundaries.item(j).style.backgroundColor = "red";
  }
  game.classList.add("youlose");

  end.removeEventListener("mouseover", win);
}

function win() {
  // write "you win" status message
  message.style.color = "green";
  message.innerText = "You have won";
  for (let i = 0; i < boundaries.length; i++) {
    boundaries.item(i).removeEventListener("mouseover", fail);
  }

  // remove game event listener
  game.removeEventListener("mouseleave", fail);
}

// function to create registration
function register() {
  let stuff = [
    {
      username: document.getElementById("username").value,
      password: document.getElementById("password").value,
      score: 0
    },
  ];
  
  let accounts = [];
  
  if (window.localStorage.getItem("accounts") !== null) {
    accounts = JSON.parse(window.localStorage.getItem("accounts"));
  }
  
  // if checkunique is false(meaning the username and password are the appropriate size, and the username is unique), it will be added to the local storage.
  if (checkUnique()) {
    accounts = accounts.concat(stuff);
    window.localStorage.setItem("accounts", JSON.stringify(accounts));
    console.log(checkUnique);
    console.log(accounts);
  }
}

function checkUnique() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let accounts = JSON.parse(window.localStorage.getItem("accounts"));
  if (accounts == null) 
  return true;

  if (username.length >= 6 && password.length >= 6) {
    for (let i = 0; i < accounts.length; i++) {
      if (username == accounts[i].username) {
        return false;
      }
    }
  }

  return true;
}

function login(){

  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let accounts = JSON.parse(window.localStorage.getItem("accounts"));
  let score = 0;
  if (username.length >= 6 && password.length >= 6 && accounts !== null) {
    for (let i = 0; i < accounts.length; i++) {
      if (username == accounts[i].username && password == accounts[i].password) {
        score = accounts[i].score;
      }
    }
  }else{
    alert("Invalid Username/Password");
  }

  

  return true;
}
}