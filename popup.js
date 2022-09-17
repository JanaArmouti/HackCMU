//fetch the element
let button = document.getElementById("button");

var buttonClicked = false;

//Red button 
var redButton = "https://images.app.goo.gl/ZybyzpXkXkd4bJrs7";
//Green button
var greenButton = "https://images.app.goo.gl/4P6wAEYt5W3WqfY5A";

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
}

function finishedReading() {
  //turn button green
  document.getElementById("button").src = greenButton;
  //text box saved as a memo
}
