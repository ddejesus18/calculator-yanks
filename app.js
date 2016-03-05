
//var buttons holds all the possible buttons that can be pressed
var buttons = document.getElementsByTagName("button");

// arr is going to hold integers. I am thinking of using a RegEx that only stores ints, when operator is pressed, return operator
// I also want to be able to clear the arr when the opeartor is pressed but store the first number in the arr for calc
 arr = [];

 //buttonCount gives me the length of the buttons
var buttonsCount = buttons.length;

//quick counter start, not sure if necessary
var x = 0;

//first for loop for the current button pressed.
for (var i = 0; i <= buttonsCount; i += 1) {

  //when one of the buttons are pressed, do the following function
  buttons[i].onclick = function() {
//buttonPressed gives me the innerHTML of the current button pressed which is determined by the variable, this.
 var a = this.innerHTML;

    // I am pushing the value of a to an arr that was initially empty
    arr.push(a);

//creating a second loop so that I can store various values of this, was having a very hard time figuring out how to store current and
//future value of this in the same place so that I can have a multi character integer.
 for (var j = 0; j <= buttonsCount; j += 1) {

   //same as above, when button is pressed return innerHTML of this
   buttons[j].onclick = function() {

     // var b is my second variable that stores the this innerHTML value
     var b = this.innerHTML;

     //I am also going to push b into the array for multi character integer
     arr.push(b);

     //console.logged to make sure
     console.log(arr);

     // joined is where I map my array, and then join them together
    var joined = arr.map(Number).join('');
    //log to make sure
     console.log(joined);

     //regex, to match int and dot
     if (joined.match(/([0-9])./g)) {
            //not matching .
    //nums to convert joined to integer
    var nums = parseInt(joined);
    //log to make sure
    num1 = nums;
     output.innerHTML = nums;

     } else (joined.match(/([x+/-])/g)); {
          return this.innerHTML;
        };
      };
     }
   };
  }


/*document.getElementById("AC").onclick = function() {
  output.innerHTML = " ";
};
document.getElementById("division").onclick = function() {
  var divi = num1 / num2;

  var total = divi;
  output.innerHTML = total;
};
document.getElementById("multiply").onclick = function() {
  var num1 = 1;
  var num2 = 3;
  var multi = num1 * num2;
  document.getElementById("equal").onclick = function(result) {
  output.innerHTML = total;
};
  output.innerHTML = multi;
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

output.innerHTML = total;
  };
}
*/
