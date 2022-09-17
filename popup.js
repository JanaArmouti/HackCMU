//fetch the element
var button = document.getElementById("button");
var points = document.getElementById("points");

var buttonClicked = false;

//Red button 
var redButton = "off.png";
//Green button
var greenButton = "on.png";

//Points
var pointsEarned = 0;

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
  changePoints();
  console.log(pointsEarned);
  //text box saved as a memo
  //increment points
  checkPoints();
}

function changePoints() {
    pointsEarned = pointsEarned + 10;
    if (pointsEarned > 100) {
        points.innerHTML = 100;
    }
    else {
        points.innerHTML = pointsEarned;
    }
}

function checkPoints() {
    if (pointsEarned == 20) {
        star1.src = "star1.png";
        alert("Good job! You have read 2 articles!");
    }
    if (pointsEarned == 50) {
        star2.src = "star2.png";
        alert("Good job! You have read 5 articles!");
    }
    if (pointsEarned == 100) {
        yoda.src = "yoda.png";
        alert("Good job! You have read 10 articles!");
    }
}