//fetch the element
let button = document.getElementById("button");
button.addEventListener('click', event => { 
  test();
});

function test() {
  alert("the button has been pressed");
}
