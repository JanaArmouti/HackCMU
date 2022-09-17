//fetch the element
let button = document.getElementById("button");

var buttonClicked = false;
var clickedImg = "https://cdn2.vectorstock.com/i/1000x1000/60/61/big-red-button-vector-4006061.jpg"

button.addEventListener('click', event => { 
  buttonClicked = !buttonClicked;
  if (buttonClicked) {
    beginReading();
  }
});

function beginReading() {
  document.getElementById("button").src = clickedImg;
}
