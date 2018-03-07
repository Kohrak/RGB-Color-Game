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

function newGame(){
  if (normalMode){
    var num = 6;
  } else {
    var num = 3;
  }
  //generate new colors
  var colors = newColors(num);
  //assign the colors generated to the html squares
  assignColors(colors, squares);
  //select a winner color
  winner = colors[Math.floor(Math.random() * num)];
  //Display the RGB values to guess
  document.querySelector("#colorDisplay").textContent = winner;
  //Resets the div background color and button message
  panel.style.backgroundColor = bodyColor;
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

//declare global variables and element pointers

//variables
var winner = ""
var normalMode = true

//pointers
var squares = document.querySelectorAll(".square");
var panel = document.querySelector("#gamePanel");
var newGamebutton = document.querySelector("#newGame")
var gameMessage = document.querySelector("#gameMessage")
var easyModeButton = document.querySelector("#easyMode")
var normalModeButton = document.querySelector("#normalMode")
var bodyColor = "black"

//Adding event listeners

for (var i = 0; i < squares.length; i++){
  squares[i].addEventListener("click", logic);
}
newGamebutton.addEventListener("click", newGame)
easyModeButton.addEventListener("click", function(){
    if (normalMode) {
    normalMode = false;
    this.classList.toggle("selected");
    normalModeButton.classList.toggle("selected");
    newGame();
  }
})
normalModeButton.addEventListener("click", function(){
  if (!normalMode) {
  normalMode = true;
  this.classList.toggle("selected");
  easyModeButton.classList.toggle("selected");
  newGame();
}
})

//initialize

newGame()
