var characterLength = 8;
var choiceArr = [];
var lowerCaseArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharArr = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "{", "}", "[", "]", "|", "\\", ":", ";", "'", "\"", "<", ">", ",", ".", "?", "/", "~"];
// Assignment Code
var generateBtn = document.querySelector("#generate");

console.log("GENERaTE BUTtON 1", generateBtn);

// Write password to the #password input
function writePassword() {
  console.log("WRITE PASSWORD?");
  var correctPrompts = getPrompts();
  var passwordText = document.querySelector("#password");

  if (correctPrompts) {
     console.log("CORRECT PROMPTS");
    var newPassword = generatePassword();
    console.log("PASSWORD?", newPassword);
    passwordText.value = newPassword;
  } else {
    console.log("INVALID");
    passwordText.value = "";
  }
}

// generate password based on prompts
function generatePassword() {
  console.log("GENERATE PASSWORD?");
  var newPassword= "";
  for(var i = 0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArr.length);
    newPassword = newPassword + choiceArr[randomIndex];
  }
  console.log("NEW PASSWORD", newPassword);
  return newPassword;
}

function getPrompts(){
    choiceArr = [];
    characterLength = parseInt(prompt("How many characters do you want your password to be?"));

    if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
      alert("Character length has to be between the numbers of 8 through 128. Please try again.");
      return false;
    }

    if (confirm("Would you like any lowercase letters in your password?")) {
      choiceArr = choiceArr.concat(lowerCaseArr)
    }
    if (confirm("Would you like any uppercase letters in your password?")) {
      choiceArr = choiceArr.concat(upperCaseArr)
    }
    if (confirm("Would you like any special characters in your password?")) {
      choiceArr = choiceArr.concat(specialCharArr)
    }
    if (confirm("Would you like any numbers in your password?")) {
      choiceArr = choiceArr.concat(numberArr)
    }

    return true; 
}

function attachEventListeners() {
  console.log("GENERaTE BUTtON 2", generateBtn);

  // Add event listener to generate button
  generateBtn.addEventListener('click', writePassword);
}

attachEventListeners();