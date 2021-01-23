//Assignment code
var generateBtn = document.querySelector("#generate");

  //global variables

var passwordNumber = false
var lowerCase = false
var upperCase = false
var specialCharacters = false
var CHARACTER_SETS = [
['1' + '2' + '3' + '4' + '5' + '6' + '7' + '8' + '9', false],

['a' + 'b' + 'c' + 'd' +'e' + 'f' +'g' + 'h' +'i' + 'j' +'k' + 'l' +'m' + 'n' +'o' + 'p' +'q' + 'r' + 's' + 't' +'u' + 'v' +'w' + 'x' +'y' + 'z', false], 

['!' + '@'+ '#' + '$' + '%' + '^' + '&' +  '*' + '('+ ')'+ '-' + '+' + '+',false],
]

var passLength;
var confirmPasswordNumber;
var confirmLowerCase;
var confirmUpperCase;
var confirmSpecialCharacters;

var value = 0;
password = false; 

// Add event listener to generate button
// generateBtn.addEventListener("click", letsGo);



  var passLength = prompt("How long is your password? Please choose the characters from 8 to 128");

if(passLength > 8 && passLength < 128){
  var passwordLength = passLength;
  console.log(passwordLength);
  password = true;
  console.log("password is " + password);
}else {
  alert("please choose a value between 8-128");
  var passwordLengtth = null;
  console.log(passwordLength)
  password = false;
  console.log("password is " + password)
  //return
}
//pn= password number
var pn = prompt("Do you need numbers in your password? Yes or no?");
pn = pn.toLowerCase();
if(pn === "no"){
  var passwordNumber = false;
  console.log("Numbers are " + passwordNumber);
}else{
  var passwordNumber = true;
  var value = +1;
  console.log("Numbers are " + passwordNumber);
}


















  