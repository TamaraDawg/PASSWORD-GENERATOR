// Assignment code here
function generatePassword() {

//Array of letters, uppercase and lowercase. 
  var upperCaseLetters = [ "A", "B", "C", "D","E","F","G","H","I","J","K","L", "N", "O","P", "Q","R",
"S","T","U","V","W", "X", "Y", "Z"];
  var lowerCaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

//Array of numbers and special characters
var numChar = ["0","1","2","3","4","5","6","7","8","9"]
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "?", "/", "-", ":", ";", "[", "]", "{", "}", ".", "<", ">", "=", "_", "`", "|", "~"];


function passChoice () {
  let passwordLength = parseInt(
    prompt("How many characters would you like to use? (between 8-128)")
  );
//User choices for generated password, only works for characters between 8-128
if (passwordLength > 7 && passwordLength < 129) {
  let upper = confirm("Would you like to use UPPERCASE letters?");
  let lower = confirm("Would you like to use lowercase letters?");
  let num = confirm("Would you like to use numb3rs?");
  let special = confirm("Would you like to use $peci@l Char@cters!?");

  let options = {
    strength: passwordLength,
    upper: upper,
    lower: lower,
    num: num,
    special: special,
  };
  //User password options will be acknowledged by generatePassword() 
  return options;
}else{
  alert("Please enter a number between 8 and 128");
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
