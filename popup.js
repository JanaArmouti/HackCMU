//fetch the element
var button = document.getElementById("button");

var buttonClicked = false;

//Red button 
var redButton = "off.png";
//Green button
var greenButton = "on.png";

button.addEventListener('click', event => { 
  buttonClicked = !buttonClicked;
  if (buttonClicked) {
    beginReading();
  }
  if (!buttonClicked) {
    finishedReading();
  }
});

function beginReading() {
  //turn button red
  button.src = greenButton;
  //text box appears 
}

function finishedReading() {
  //turn button green
  button.src = redButton;
  //text box saved as a memo
}