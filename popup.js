//fetch the element
var button = document.getElementById("button");

var buttonClicked = false;

//Red button 
var redButton = "off.png";
//Green button
var greenButton = "on.png";

//Points
var pointsEarned = 0;

chrome.storage.sync.get({points: pointsEarned}, function(data));

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
  //increment points
  chrome.storage.sync.get(['points'], function(data) {
    pointsEarned = data.points;
  });
  chrome.storage.sync.set({points: 0}, function() {
    pointsEarned = pointsEarned + 10;
    console.log('Value is set to ' + pointsEarned);
});
}
