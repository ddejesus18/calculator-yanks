
var ops = document.querySelectorAll('.operator button');

var digits = document.querySelectorAll(".digits, button");
  var totalOutput = document.getElementById("output");

var numbersLength = function(number) {
  if(number.length < 9) {   totalOutput.innerHTML(number.substr(0, 9));
  } if(number.length < 12) {
    totalOutput.innerHTML("Error");
    }
};
  var number = "";
  var newNum = "";
  var operator = "";

for (var a = 0; a <= ops.length; a++) {
  var opChoice = ops[a];
  opChoice.onclick = function() {
  var curOp = this.innerHTML;
   var totalOutput = document.getElementById("output").innerHTML = curOp;
  };
}
//Will work on getting that function outside of the loop.
