// Assignment Code
var generateBtn = document.querySelector("#generate");

// define variables outside the function, have prompts inside since propmts are connected to button

 var upperCase = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
 var lowerCase = Array.from("abcdefghijklmnopqrstuvwxyz")
 var numbers = Array.from("012345679")
//  needs to be a string
var specialCharacters = Array.from("!@#$%^&*()")


// had to define/create the function
function generatePassword () {

var userChosen = []

var password = ""

// dowhile makes it so the prompt repeats until condition is met
// parseInt makes string numbers into real numbers
// Number.isNan checks if what is entered by the user is a number
do {
  var length = parseInt(window.prompt("Please enter a number between 8 and 128 for your password length."));
} while (Number.isNaN(length) || length < 8 || length > 128) ;
  
   var hasUpperCase = window.confirm("OK to use uppercase?");
  
   var hasLowerCase = window.confirm("OK to use lowercase?");

   var hasNumbers = window.confirm("OK to use numbers?");
  
   var hasSpecialCharacters = window.confirm("OK to use special characters?")

  //  if user selects 'cancel' for everything
if (!hasUpperCase && !hasLowerCase && !hasNumbers && !hasSpecialCharacters) {
  window.alert ("You must pick at least one character type. Please try again.")
  return ""
}

if (hasUpperCase) {
  // concat combines the user's choice with the array
  userChosen = userChosen.concat(upperCase)
}

if (hasLowerCase) {
  userChosen = userChosen.concat(lowerCase)
}

if (hasNumbers) {
  userChosen = userChosen.concat(numbers)
}

if (hasSpecialCharacters) {
  userChosen = userChosen.concat(specialCharacters)
}

// starts bringng the conditions together
for (var i = 0; i < length; i ++) {

  // Math.random gives numbers 0 - 1 (not including 1), multiply by array length to get number over 1
// Math.floor rounds down/drops decimal
  var index = Math.floor(Math.random() * userChosen.length) 

  // index looks at the array and gets character out at that number
  password += userChosen [index] 
}

return password;

}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");




  passwordText.value = password;

}

// event listener to generate button
generateBtn.addEventListener("click", writePassword);

