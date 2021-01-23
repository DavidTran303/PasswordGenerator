




  //global variables
  var passwordNumber = ['1' + '2' + '3' + '4' + '5' + '6' + '7' + '8' + '9'] 
  //lower case option
    var lowerCase = ['a' + 'b' + 'c' + 'd' +'e' + 'f' +'g' + 'h' +'i' + 'j' +'k' + 'l' +'m' + 'n' +'o' + 'p' +'q' + 'r' + 's' + 't' +'u' + 'v' +'w' + 'x' +'y' + 'z'] 
    //uppercase option
    var upperCase = ['A' + 'B' + 'C' + 'D' +'E' + 'F' +'G' + 'H' +'I' + 'J' +'K' + 'L' +'M' + 'N' +'O' + 'P' +'Q' + 'R' + 'S' + 'T' +'U' + 'V' +'W' + 'X' +'Y' + 'Z'] 
      //special characters option
    var specialCharacters = ['!' + '@'+ '#' + '$' + '%' + '^' + '&' +  '*' + '('+ ')'+ '-' + '+' + '+']
          
var passLength = ""
var lengthMin = 8
var lengthMax = 128
var confirmPasswordNumber;
var confirmLowerCase;
var confirmUpperCase;
var confirmSpecialCharacters
// var password = generatePassword();


//beginning of the function of the program
//password length

  var passLength = prompt("What's the length of the password you desire?(The length  has to be at least 8 characters and no more than 128 characters.)") 

 if(lengthMin < 8 && lengthMax > 128){
  prompt("Enter value between 8 and 128")

} else(lengthMin < 8 && lengthMax >=128)
  prompt("Please confirm a number between 8 to 128 to determine your passwords length")


 var confirmPasswordNumber = confirm("Would you like to input numbers in your password?");

var confirmLowerCase = confirm("Would you like to input lower case in your password?");

var confirmUpperCase = confirm("Would you like to input upper case in your password?");

var confirmSpecialCharacters = confirm("Would you like to input special characters in your password?");


//it will alert the user if they dont choose non of the option given.
if(!passwordNumber && !lowerCase && !upperCase && !specialCharacters){
  alert("Please choose at tleast one of thte critea, in order to generate a password")

} else if(passwordNumber && lowerCase && upperCase && specialCharacters){

}





 // Write password to the #password input 
function writePassword() {
  function generatePassword()
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

