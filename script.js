
// button to generate password
var generateBtn = document.querySelector("#generate");


// Write password to the #password input 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//math
// var index = Math.floor(Math.floor(Math.random() * password.length)

//beginning of the function of the program
//password length
var passLength = prompt("What's the length of the password you desire?(The length  has to be at least 8 characters and no more than 128 characters.)")

  //User has to choose the condition: 8 to 128 characters in order to generate a password
  

  
  if(passLength <= 8){
   return; 
  }
  if(passLength => 128){
    return;
  }
    
    //values for critea required
    
      //numbers option
    var numbers = ['1' + '2' + '3' + '4' + '5' + '6' + '7' + '8' + '9'] 
      let genPasswordNumber = confirm("Would you like to input numbers in your password?");
        console.log(numbers.length);
    
      //lower case option
    var lowerCase = ['a' + 'b' + 'c' + 'd' +'e' + 'f' +'g' + 'h' +'i' + 'j' +'k' + 'l' +'m' + 'n' +'o' + 'p' +'q' + 'r' + 's' + 't' +'u' + 'v' +'w' + 'x' +'y' + 'z'] 
      let genPasswordLowerCase = confirm("Would you like to input lower case in your password?");
        console.log(lowerCase.length);

        //uppercase option
    var upperCase = ['A' + 'B' + 'C' + 'D' +'E' + 'F' +'G' + 'H' +'I' + 'J' +'K' + 'L' +'M' + 'N' +'O' + 'P' +'Q' + 'R' + 'S' + 'T' +'U' + 'V' +'W' + 'X' +'Y' + 'Z'] 
      let genPasswordUpperCase = confirm("Would you like to input upper case in your password?");
          console.log(upperCase.length);

        //special characters option
    var specialCharacters = ['!' + '@'+ '#' + '$' + '%' + '^' + '&' +  '*' + '('+ ')'+ '-' + '+' + '+']
      let genPasswordSpecialCharacters = confirm("Would you like to input special characters in your password?");
        console.log(specialCharacters.length);

      var index = Math.floor(Math.random() * numbers.length * lowerCase.length * upperCase.length *specialCharacters.length)  
     


  //combination of password
 

  
  