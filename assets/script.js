// Assignment Code
var generateBtn = document.querySelector("#generate");

// had to define/create the function
function generatePassword () {

}

window.prompt("How many characters do you want your password to include?");

window.confirm("OK to use special characters?")

window.confirm("OK to use numbers?")

window.confirm("OK to use lowercase letters?")

window.confirm("OK to use uppercase letters?")

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// prompts: how many characters, okay to use special characters, okay to okay to use numbers, okay for lowercase, okay for uppercase
// last 4 are confirms, true or false, so if conditionals

// function connected to the button