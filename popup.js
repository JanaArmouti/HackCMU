//fetch the element
let button = document.getElementById("button");

var buttonPressed = false;

button.addEventListener('click', event => { 
  buttonPressed = !buttonPressed;
  if (buttonPressed) {
    beginReading();
  }
});

function beginReading() {
  alert("Begin Reading!");
}
