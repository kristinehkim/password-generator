// Define generatePassword and that is what is going to return the random password
var generatePassword = "Password"; //Do your logic below
// Do all your code here, don't touch below code!

window.prompt("How many characters would you like your password to contain?");

window.confirm("Click OK to confirm including special characters.")

window.confirm("Click OK to confirm including numeric characters.")

window.confirm("Click OK to confirm including lowercase characters.")

window.confirm("Click OK to confirm including uppercase characters.")

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
