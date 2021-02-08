/*-----RANDOM CODES-----*/
//function to generate combination of characters
var code = ' '; //initialize to null value
var str = 'ABCDEFGHIJKLMNOPQRSTUVWZ0123456789@#$';
//Generate character multiple times using a loop
var getCode = ' '; //to store entered code
var btnvalue; //for button boolean value

function generateCode() {
  //create variables to store generated codes and the type of characters we want to show a a codes
  for (i = 1; i <= 8; i++) {
    var char = Math.random() * str.length; // random select a character from the variable
    code += str.charAt(char) //accumulate the generated character into a string 8
  }
  return code; //return the final accumulated string when loop ends
}
//get HTML element to display
document.getElementById("codes").innerHTML = generateCode();
//Activate function
function disableButton(btnvalue) {
  // document.getElementsById("submit").disabled = btnvalue; //able/disable button
  if (btnvalue == true) {
    // test if button is disabled or enabled
    //set button and label color translucent
    document.getElementById("submit").style.backgroundColor = "rgba(73, 119, 209, 0.3)";
    document.getElementById("submit").style.color = "rgba(255, 255, 255, 0.5)";
  } else {
    //set button and label color with no transparency
    document.getElementById("submit").style.backgroundColor = "rgba(73, 119, 209, 1)";
    document.getElementById("submit").style.color = "rgba(255, 255, 255, 1)";
  }
}

//listen to user input code
var codebox = document.getElementById("codeentered"); //get text box
codebox.addEventListener("input", evaluateCode); //listen to code entered in text box
// run function if detected user had entered a character in textbox
function evaluateCode() {
  getCode = document.getElementById("codeentered").value; //get character entered
  var charset1 = getCode.trim(); //remove any hidden character entered
  var charset2 = code.trim(); //remove any hidden character generated
  //test if code entered matches the number of generated character
  if (charset1.length == charset2.length && charset1 == charset2) {
  // if (charset1 == "a") {
    disableButton(false); //if match, run the function to enable the button
  }
}
//disableButton();