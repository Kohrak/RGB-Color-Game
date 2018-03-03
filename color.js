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

function newGame(){
  var colors = newColors(6);
  assignColors(colors, squares);
  winner = colors[Math.floor(Math.random() * 6)];
  document.querySelector("#colorDisplay").textContent = winner;
}

function logic(){
  console.log("clicked");
  if (this.style.backgroundColor == winner){
    console.log("you win")
  }
  else {
    this.style.backgroundColor = "black";
    console.log("nope")
  }
}
var winner = ""
var squares = document.querySelectorAll(".square");
for (var i = 0; i < squares.length; i++){
  squares[i].addEventListener("click", logic);
}
newGame()
