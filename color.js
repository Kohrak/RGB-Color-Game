function newColors(num){
  //generates rgb colors and return an array of them
  var colors = [];
  for (var i = 0; i < num; i++){
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    var rgb = "rgb(" + r + ", " + g + ", " + b + ")";
    colors.push(rgb)
  }
  return colors
}

function assignColors(colors, squares){
  //Changes each html squares background to the colors of the array
  for (var j = 0; j < squares.length; j++){
    if (colors[j]){
      squares[j].style.display = "block";
      squares[j].style.backgroundColor = colors[j];
      if (squares[j].classList.contains("squareHard")){
        if(squaresQ != 12){
          squares[j].classList.remove("squareHard")
        }
      } else {
        if(squaresQ == 12){
          squares[j].classList.add("squareHard")
        }
      }
    } else {
      squares[j].style.display = "none";
    }
  }
}

function win(color){
  //Make style changes when the user wins
  for (var j = 0; j < squares.length; j++){
    squares[j].style.backgroundColor = color;
  }
  panel.style.backgroundColor = color;
  gameMessage.textContent = "You Win!";
  newGamebutton.textContent = "Play Again?";
}

function newGame(num){
  //generate new colors
  var colors = newColors(num);
  //assign the colors generated to the html squares
  assignColors(colors, squares);
  //select a winner color
  winner = colors[Math.floor(Math.random() * num)];
  //Display the RGB values to guess
  document.querySelector("#colorDisplay").textContent = winner;
  //Resets the div background color and button message
  panel.style.backgroundColor = "#0b3954";
  newGamebutton.textContent = "New Colors";
  gameMessage.textContent = "";
}

function logic(){
  //Checks if the color you selected is the winner color
  if (this.style.backgroundColor == winner){
    //executes the win dom changes
    win(winner)
  }
  else {
    this.style.backgroundColor = bodyColor;
    gameMessage.textContent = "Try again!";
  }
}

function changeMode(mode){
  //changes game mode and display mode with buttons
  function toggleButtons(mode){
    for (var i = 0; i < modebtn.length; i++){
      if (modebtn[i].textContent == mode){
        modebtn[i].classList.add("selected")
      } else {
        modebtn[i].classList.remove("selected");
      }
    }
      newGame(squaresQ);
  }
  // if (squaresQ != 3 && mode =="Easy"){
  //   squaresQ = 3
  //   toggleButtons();
  //   newGame(squaresQ);
  // } else if (squaresQ != 6 && mode =="Normal") {
  //   squaresQ = 6
  //   toggleButtons();
  //   newGame(squaresQ);
  // } else if (squares != 9 && mode =="Hard"){
  //   squaresQ = 9
  //   toggleButtons();
  //   newGame(squaresQ)
  // }
  switch(mode){
    case "Easy":
      if(squaresQ != 3){
        squaresQ = 3
        toggleButtons(mode);
      }
      break;
    case "Normal":
      if(squaresQ != 6){
        squaresQ = 6
        toggleButtons(mode);
      }
      break;
    case "Hard":
      if(squaresQ != 12){
        squaresQ = 12;
        toggleButtons(mode);
      }
      break;
  }
}


//declare global variables and element pointers

//variables
var bodyColor = "#1b1b1c";
var winner = "";
var squaresQ = 6;

//pointers
var squares = document.querySelectorAll(".square");
var panel = document.querySelector("#gamePanel");
var newGamebutton = document.querySelector("#newGame")
var gameMessage = document.querySelector("#gameMessage")
var easyModeButton = document.querySelector("#easyMode")
var normalModeButton = document.querySelector("#normalMode")
var modebtn = document.querySelectorAll(".modebtn")


//Adding event listeners

for (var i = 0; i < squares.length; i++){
  squares[i].addEventListener("click", logic);
}
newGamebutton.addEventListener("click", function(){
  newGame(squaresQ);
})

for (var i = 0; i < modebtn.length; i++){
  modebtn[i].addEventListener("click", function(){
    changeMode(this.textContent);
  })
}

//initialize

newGame(squaresQ);
