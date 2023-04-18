// Define generatePassword and that is what is going to return the random password
//Do your logic below 
var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", ",", "-", ".", "/", ":", ";", "<", ">", "[", "]", "_", "`", "{", "}", "|", "~",'"'];

// Do all your code here, don't touch below code!
function generatePassword() {
  var pot = [];
  var charactersLength = parseInt(prompt("How many characters would you like your password to contain?"));
  // console.log(typeof(charactersLength))
  if (charactersLength < 8 || charactersLength > 128) {
    return alert("Your password must be between 8 and 128 characters.");
  }

  var includeSpecialCharacters = confirm("Click OK to confirm including special characters.");
  // console.log(typeof(includeSpecialCharacters))
  var includeNumericCharacters = confirm("Click OK to confirm including numeric characters.");

  var includeLowercaseCharacters = confirm("Click OK to confirm including lowercase characters.");

  var includeUppercaseCharacters = confirm("Click OK to confirm including uppercase characters.");

  if (includeSpecialCharacters === false &&
    includeNumericCharacters === false &&
    includeLowercaseCharacters === false &&
    includeUppercaseCharacters === false) {
    return alert("You must select at least one character type");
  }

  if (includeSpecialCharacters === true) {
    //add special characters to the pot
    pot = pot.concat(specialCharacters);
  }
  if (includeNumericCharacters) {
    //add special characters to the pot
    pot = pot.concat(numbers);
  }
  if (includeLowercaseCharacters) {
    //add special characters to the pot
    pot = pot.concat(lowerCaseLetters);
  }
  if (includeUppercaseCharacters) {
    //add special characters to the pot
    pot = pot.concat(upperCaseLetters);
  }
  console.log(pot);
}
// Start with define generate password
// var
// Assignment Code - document.querySelector is just grabbing the button. document refers to the HTML document, query selector is how it's grabbing it, and it's grabbing the button with the id generate so this is saying our generateBtn is is the button we get from document.querySelector("#generate") - the query selector is just setting up the button to work when you click it and to assign the text that generate password gives it
var generateBtn = document.querySelector("#generate"); // grabs the button

// Write password to the #password input - this function writePassword calls generate password, generate password doesn't exist and that is what we are going to make
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password"); //inserts the password document.querySelector("#password") into the text box below passwordText.value = password

  passwordText.value = password;

}

// Add event listener to generate button - when you "click" on this button, we're going to call this function writePassword in our JS which is the function writePassword (above).
generateBtn.addEventListener("click", writePassword);
