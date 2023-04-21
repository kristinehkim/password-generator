// Arrays of all the possible options
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", ",", "-", ".", "/", ":", ";", "<", ">", "[", "]", "_", "`", "{", "}", "|", "~", '"'];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function generatePassword() {
  var pot = [];
  //Used pareInt to change the string to a number and created an if statement/conditional gate to verify that the length is between 8 and 128 characters.  If the user chooses outside of the limits, an alert will show.
  var charactersLength = parseInt(prompt("How many characters would you like your password to contain?  Please choose between 8 and 128."));
  // console.log(typeof(charactersLength)) I did this to make sure it would return a number.
  if (charactersLength < 8 || charactersLength > 128) {
    return alert("Your password must be between 8 and 128 characters.");
  }
  //Confirm windows so the user can choose to include special characters, numeric characters, lowercase, and uppercase characters.
  var includeSpecialCharacters = confirm("Click OK to confirm including special characters.");
  // console.log(typeof(includeSpecialCharacters))
  var includeNumericCharacters = confirm("Click OK to confirm including numeric characters.");

  var includeLowercaseCharacters = confirm("Click OK to confirm including lowercase characters.");

  var includeUppercaseCharacters = confirm("Click OK to confirm including uppercase characters.");
  //Conditional gate so if the user doesn't choose any of the above, an alert will pop up reminding to choose at least one.
  if (includeSpecialCharacters === false &&
    includeNumericCharacters === false &&
    includeLowercaseCharacters === false &&
    includeUppercaseCharacters === false) {
    return alert("You must select at least one character type");
  }
  //When the user selects a certain character, it will get added to the pot.
  if (includeSpecialCharacters) {
    //add special characters to the pot
    pot = pot.concat(specialCharacters);
  }
  if (includeNumericCharacters) {
    //add numeric characters to the pot
    pot = pot.concat(numbers);
  }
  if (includeLowercaseCharacters) {
    //add lowercase characters to the pot
    pot = pot.concat(lowerCaseLetters);
  }
  if (includeUppercaseCharacters) {
    //add uppercase characters to the pot
    pot = pot.concat(upperCaseLetters);
  }
  // This will randomly choose from the pot and strings it together.
  var finalPass = []
  for (var i = 0; i < charactersLength; i++) {
    var index = Math.floor(Math.random() * pot.length);
    var userChoice = pot[index];
    // console.log(userChoice)
    finalPass.push(userChoice);
  }

  // if (includesSpecialCharacters === true) {
  //   myArr[0] = ""
  //   specialCharacters[12];
  // }
  
  return finalPass.join("");

// Make sure at least one of each character is selected if statement // google check if the string has a certain character
//  if it passes then it will return a password
// if it doesn't pass reselect the characters from the pot again try a new password from scratch again google how to loop until a certain condition is met



// Assignment Code - document.querySelector is just grabbing the button. document refers to the HTML document, query selector is how it's grabbing it, and it's grabbing the button with the id generate so this is saying our generateBtn is is the button we get from document.querySelector("#generate") - the query selector is just setting up the button to work when you click it and to assign the text that generate password gives it
var generateBtn = document.querySelector("#generate"); // grabs the button

// Write password to the #password input - this function writePassword calls generate password, generate password doesn't exist and that is what we are going to make
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password"); //inserts the password document.querySelector("#password") into the text box below passwordText.value = password

  passwordText.value = password;

  return alert(password);

}

// Add event listener to generate button - when you "click" on this button, we're going to call this function writePassword in our JS which is the function writePassword (above).
generateBtn.addEventListener("click", writePassword);
