// Assignment code here

// I used const instead of var as they are not intended to be reassigned. 
//Array of letters, uppercase and lowercase. 
  const upperCaseLetters = [ "A", "B", "C", "D","E","F","G","H","I","J","K","L", "N", "O","P", "Q","R",
"S","T","U","V","W", "X", "Y", "Z"];
  const lowerCaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

//Array of numbers and special characters
const numChar = ["0","1","2","3","4","5","6","7","8","9"]
const specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "?", "/", "-", ":", ";", "[", "]", "{", "}", ".", "<", ">", "=", "_", "`", "|", "~"];

//prompt function and returning new password function.
function generatePassword() {
var passwordLength = prompt("How many characters do you want your password to have? (8-128)");
while (passwordLength < 8 || passwordLength > 128) {
  //if user does not write a number between 8 or 128
  alert("Sorry, Please choose a number BETWEEN 8 and 128.");
  passwordLength = prompt("How many characters do you want your password to have? (8-128)");
}
//after choosing length, the user will be asked if they would like to use certain characteristics
var lower = confirm("Do you want to use lowercase letters?");
var upper = confirm("Do you want to use UPPERCASE letters?");
var num =  confirm("Do you want to use numb3rs?");
var special = confirm("Do you want to use $peci@l Ch@racters?");
//if at least one of the options is not chosen:
if (!lower && !upper && !num && !special) {
  alert("You didn't choose a character set! Sorry, No Password can be Generated.")
return "";
}

//includes user options, if selected
var charSet = "";
if (lower) {
  charSet += lowerCaseLetters
}
if (upper) {
  charSet += upperCaseLetters
}
if (num) {
  charSet += numChar
}
if (special) {
  charSet += specialChar
}
//sets the length to suit
var password
  for (var i = 0; i < passwordLength; i++) {
    password += charSet.charAt(Math.floor(Math.random()* charSet.passwordLength))
  }
return password;
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
