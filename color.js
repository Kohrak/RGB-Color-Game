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
var squares = document.querySelectorAll(".square");
for (var i = 0; i < squares.length; i++){
  squares[i].addEventListener("click", function(){
    console.log("clicked");
  });
}

assignColors(newColors(6), squares);
