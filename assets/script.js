// GIVEN I need a new, secure password

// WHEN I click the button to generate a password

// THEN I am presented with a series of prompts for password criteria

// WHEN prompted for password criteria

// THEN I select which criteria to include in the password

// WHEN prompted for the length of the password

// THEN I choose a length of at least 8 characters and no more than 128 characters

// WHEN asked for character types to include in the password

// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

// WHEN I answer each prompt

// THEN my input should be validated and at least one character type should be selected

// WHEN all prompts are answered

// THEN a password is generated that matches the selected criteria

// WHEN the password is generated

// THEN the password is either displayed in an alert or written to the


// Assignment Code
var generateBtn = document.querySelector("#generate");

// define variables outside the function, have prompts inside since propmts are connected to button
// create character sets (charSet) based on prompts


var charSet

 var upperCase = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
 var lowercase = Array.from("abcdefghijklmnopqrstuvwxyz")
 var numbers = Array.from("012345679")
//  needs to be a string
var specialCharacters = Array.from("!@#$%^&*()")


// had to define/create the function
function generatePassword () {
var userChosen = []
  var length = window.prompt("Please enter a number between 8 and 20 for your password length.");
  if (length < 8 || length > 20) {
      window.prompt("Please enter a number between 8 and 20 for your password length.")
  }
  
   var hasUpperCase = window.confirm("OK to use uppercase?");
  
  
   var hasLowerCase = window.confirm("OK to use lowercase?");
  
  
   var hasNumbers = window.confirm("OK to use numbers?");
  
  
   var hasSpecialCharacters = window.confirm("OK to use special characters?")

if (hasUpperCase) {
  userChosen = userChosen.concat(upperCase)
}
if (hasLowerCase) {
  userChosen = userChosen.concat(lowercase)
}
if (hasNumbers) {
  userChosen = userChosen.concat(numbers)
}
if (hasSpecialCharacters) {
  userChosen = userChosen.concat(specialCharacters)
}
}

// Write password to the #password input, prompts go here
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");




  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// prompts connected to the button: how many characters, okay to use special characters, okay to okay to use numbers, okay for lowercase, okay for uppercase
// last 4 are confirms, true or false, so if conditionals

// function connected to the button
