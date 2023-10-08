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

var length;
var upperCase;
var lowerCase; 
var numbers;
var specialCharacters;
var charSet

// had to define/create the function
function generatePassword () {
}

// Write password to the #password input, prompts go here
function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  length = window.prompt("Please enter a number between 8 and 20 for your password legnth.");
// if ((length >= 8) || (length <= 20)) {

// }

  upperCase = window.confirm("OK to use uppercase?");


  lowerCase = window.confirm("OK to use lowercase?");


  numbers = window.confirm("OK to use numbers?");


  specialCharacters = window.confirm("OK to use special characters?")



  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// prompts connected to the button: how many characters, okay to use special characters, okay to okay to use numbers, okay for lowercase, okay for uppercase
// last 4 are confirms, true or false, so if conditionals

// function connected to the button
