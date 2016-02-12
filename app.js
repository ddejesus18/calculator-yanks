// out is where my screen
var out = document.getElementById = ('output');

//getting all buttons by the tag
var buttons = document.getElementsByTagName("button");

//making buttonCount for interating purposes
var buttonsCount = buttons.length;

//My for loop is interating through all of the buttons
for (var i = 0; i <= buttonsCount; i += 1) {
  // What this function does is that when one of my buttons are clicked, it will return the id by using the special variable this. I stored that info in the var currentButton.
    buttons[i].onclick = function(e) {
        var currentButton = this.id;
   //Whatever button is clicked and an id is returned, it will get rendered in the screen    by making my output equal to currentButton.
  output.innerHTML = currentButton;
    };
}


// I need to figure out how to not display the non-number id's on te screen and how to display multi digit number together.
