
var total;
var buttons = document.getElementsByTagName("button");


var buttonsCount = buttons.length;
for (var i = 0; i <= buttonsCount; i += 1) {
  buttons[i].onclick = function() {
        var buttonPressed = this.innerHTML;
      console.log(buttonPressed);

      //if we can convert the id into an integer than output it, otherwise output " ".  there is still something else that needs to be done to currentButton before we output.

    //its not the id you want to display, its the text.
     // if (isNaN(currentButton) === false) {
        output.innerHTML = buttonPressed;
     // } else if
       //  (currentButton == "dot") {
        // output.innerHTML = ".";
     // } else {
        // output.innerHTML = " ";
    //  }
};
}
document.getElementById("division").onclick = function() {
  var divi = num1 / num2;
  var total = divi;
  output.innerHTML = total;
};
document.getElementById("multiply").onclick = function() {
  var multi = num1 * num2;
  var total = multi;
  output.innerHTML = total;
};
document.getElementById("minus").onclick = function() {
  var minus = num1 - num2;
  var total = minus;
  output.innerHTML = total;
};
document.getElementById("add").onclick = function() {
  var add = num1 + num2;
  var total = add;
  output.innerHTML = total;
};
// What total is this looking at?
document.getElementById("equal").onclick = function() {
  output.innerHTML = total;
};
