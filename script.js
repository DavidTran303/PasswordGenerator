//Assignment code
var generateBtn = document.querySelector("#generateBtn");

  //global variables

var passwordNumber = false
var lowerCase = false
var upperCase = false
var specialCharacters = false
var CHARACTER_SETS = ""

var numbs = "1234567890"
var lowCase = "abcdefghijklmnopqrstuvwxyz"
var upCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var sCharacters = "!@#$%^&*()-+="


var passLength;
var confirmPasswordNumber;
var confirmLowerCase;
var confirmUpperCase;
var confirmSpecialCharacters;

var value = 0;
var password = false; 

function writePassword() {
 
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function createPassword(){
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", function(){
  passLength = prompt("How long is your password? Please choose the characters from 8 to 128");
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
    console.log("Password Length")
  }

  //pn= password number
  var pn = prompt("Do you need numbers in your password? Yes or no?");
  pn = pn.toLowerCase();
  if(pn === "no"){
    var passwordNumber = false;
    console.log("Numbers will not be generated");
  }else{
    var passwordNumber = true;
    var value = +2;
    console.log("Numbers will be generated");
    CHARACTER_SETS += numbs
  }

  //Lower Case 
  var a = prompt("Do you need lower cases letters in  your password? Yes or No?");
  a = a.toLowerCase();
  if( a === "no"){
    var lowerCase = false;
    console.log("lower case  will not be generated")
  }else{
    var lowerCase = true;
    var value = +1;
    console.log("lower case will be generated")
    CHARACTER_SETS += lowCase
  }

  // upperCase
  var b = prompt("Do you need upper case letters in your password? Yes or No");
  b = b.toLowerCase();
  if(b === "no"){
    var upperCase = false;
    console.log("Upper case will not be generated");
  }else{
    var upperCase = true;
    value = +1;
    console.log("Upper case will be generated")
    CHARACTER_SETS += upCase
  }

  //Special Characters
  var c = prompt("Do you need special characters in your password? Yes or No?");
  c = c.toLowerCase();
  if(c === "no"){
    var specialCharacters = false;
    console.log("Special characters will not be generated")
  }else{
    var specialCharacters = true;
    value = +2
    console.log("Special characters will be generated")
    CHARACTER_SETS += sCharacters
  }

  password = ""
  for(var i = 0 ; i < passLength; i++){
    password+=CHARACTER_SETS[Math.floor(Math.random()* CHARACTER_SETS.length)]
    console.log(password)
  }  
  writePassword () 

});






//Write password to the #password input



