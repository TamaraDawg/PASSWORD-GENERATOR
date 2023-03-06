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
while (passwordLength < 8 || lpasswordLength > 128) {
  alert("Sorry, Please choose a number BETWEEN 8 and 128.");
  passwordLength = prompt("How many characters do you want your password to have? (8-128)");
}

var lower = confirm("Do you want to use lowercase letters?");
var upper = confirm("Do you want to use UPPERCASE letters?");
var num =  confirm("Do you want to use numb3rs?");
var special = confirm("Do you want to use $peci@l Ch@racters?");

//


  

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
