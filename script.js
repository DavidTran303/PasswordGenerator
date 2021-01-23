//Assignment code
var generateBtn = document.querySelector("#generate");

  //global variables

var passwordNumber = false
var lowerCase = false
var upperCase = false
var specialCharacters = false
var CHARACTER_SETS = [
['1' + '2' + '3' + '4' + '5' + '6' + '7' + '8' + '9'],

['a' + 'b' + 'c' + 'd' +'e' + 'f' +'g' + 'h' +'i' + 'j' +'k' + 'l' +'m' + 'n' +'o' + 'p' +'q' + 'r' + 's' + 't' +'u' + 'v' +'w' + 'x' +'y' + 'z'], 

['!' + '@'+ '#' + '$' + '%' + '^' + '&' +  '*' + '('+ ')'+ '-' + '+' + '+']
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
  console.log("Numbers will not be generated");
}else{
  var passwordNumber = true;
  var value = +1;
  console.log("Numbers will be generated");
}

//Lower Case 
var a = prompt("Do you need lower cases letters in  your password? Yes or No?");
a = a.toLowerCase
if( a === "no"){
  var lowerCase = false;
  console.log("lower case  will nott be generated")
}else{
  var lowerCase = true;
  var value = +1;
  console.log("lower case will be generated")
}

// upperCase
var b = prompt("Do you need upper case letters in your password? Yes or No");
b = b.toLowerCase
if(b === "No"){
  var upperCase = fasle;
  console.log("Upper case will not be generated");
}else{
  var upperCase = true;
  value = +1;
  console.log("Upper case will be generated")
}

//Special Characters
var c = prompt("Do you need special characters in your password? Yes or No?");
c = c.toLowerCase
if(c === "No"){
  var specialCharacters = false;
  console.log("Special characters will not be generated")
}else{
  var specialCharacters = true;
  value = +1
  console.log("Special characters will be generated")
}

function createPassword(){
var password = ""
var choice = [];

if(passwordNumber = true ){
  choice.push('1' + '2' + '3' + '4' + '5' + '6' + '7' + '8' + '9')
}
if(lowerCase = true){
  choice.push('a' + 'b' + 'c' + 'd' +'e' + 'f' +'g' + 'h' +'i' + 'j' +'k' + 'l' +'m' + 'n' +'o' + 'p' +'q' + 'r' + 's' + 't' +'u' + 'v' +'w' + 'x' +'y' + 'z')
}
if(upperCase = true){
  choice.push('A' + 'B' + 'C' + 'D' +'E' + 'F' +'G' + 'H' +'I' + 'J' +'K' + 'L' +'M' + 'N' +'O' + 'P' +'Q' + 'R' + 'S' + 'T' +'U' + 'V' +'W' + 'X' +'Y' + 'Z')
}
if(specialCharacters = true){
  choice.push('!' + '@'+ '#' + '$' + '%' + '^' + '&' +  '*' + '('+ ')'+ '-' + '+' + '+')
}

}
for(var i = 0 ; i < passLength; i++){
createPassword += choice.push[Math.floor(Math.random()* choice.length)]

console.log(generatePassword)
} 

//Write password to the #password input
function writePassword() {
 
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
writePassword ();
{
  generatePassword();
}

