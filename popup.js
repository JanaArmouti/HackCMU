//fetch the element
let button = document.getElementById("button");

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
  document.getElementById("button").src = redButton;
  //text box appears 
  alert("begin reading!");
}

function finishedReading() {
  //turn button green
  document.getElementById("button").src = greenButton;
  //text box saved as a memo
}
