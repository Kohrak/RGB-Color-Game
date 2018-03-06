function newColors(num){
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
  for (var j = 0; j < squares.length; j++){
    squares[j].style.backgroundColor = colors[j];
  }
}

function win(color){
  for (var j = 0; j < squares.length; j++){
    squares[j].style.backgroundColor = color;
  }
  panel.style.backgroundColor = color;
  gameMessage.textContent = "You Win!"
}

function newGame(){
  if (normalMode){
    var num = 6;
  } else {
    var num = 3;
  }
  var colors = newColors(num);
  assignColors(colors, squares);
  winner = colors[Math.floor(Math.random() * num)];
  document.querySelector("#colorDisplay").textContent = winner;
  panel.style.backgroundColor = "black";
}

function logic(){
  if (this.style.backgroundColor == winner){
    win(winner)
  }
  else {
    this.style.backgroundColor = "black";
    gameMessage.textContent = "Try again!";
  }
}

var winner = ""
var squares = document.querySelectorAll(".square");
var panel = document.querySelector("#gamePanel");
var newGamebutton = document.querySelector("#newGame")
var gameMessage = document.querySelector("#gameMessage")
var normalMode = true
for (var i = 0; i < squares.length; i++){
  squares[i].addEventListener("click", logic);
}
newGamebutton.addEventListener("click", newGame)
newGame()
