// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Pass the password value into the box
function generatePassword() {
  const passwordLength = getPasswordLength();
  const passwordCriteria = getPasswordCriteria();
  const password = getPassword(passwordLength, passwordCriteria);
  return password;
}

// Ask the user to identify the input criteria for their password
// Ensure that they select at least 1 from the criteria list
function getPasswordCriteria() {
  var useUppers = prompt("Use upper case characters in your password? (Y/N)");
  var useLowers = prompt("Use lower case characters in your password? (Y/N)");
  var useNumbers = prompt("Use numbers in your password? (Y/N)");
  var useSymbols = prompt("Use symbols in your password? (Y/N)");
  while (useUppers.toUpperCase() !== "Y"  && useLowers.toUpperCase() !== "Y" && useNumbers.toUpperCase() !== "Y" & useSymbols.toUpperCase() !== "Y") {
    alert("You must select at least one criteria to generate a password");
      useUppers = prompt("Use upper case characters in your password? (Y/N)");
      useLowers = prompt("Use lower case characters in your password? (Y/N)");
      useNumbers = prompt("Use numbers in your password? (Y/N)");
      useSymbols = prompt("Use symbols in your password? (Y/N)");
  }
  return {
    "useUppers": useUppers,
    "useLowers": useLowers,
    "useNumbers": useNumbers,
    "useSymbols": useSymbols,
  }
}

// Defining the different characters to use for different password criteria

const lowerChar = "abcdefghijklmnopqrstuvwxyz";
const upperChar = "ABCDEFGHIJKLMNOPRSTUVWXYZ";
const numbers = "1234567890";
const symbols = "~!@#$%^&*()_+{}:?";

// Based on the criteria the user selected, create a list of all characters to 
// use in password generation

function getPassword(passwordLength, passwordCriteria) {
  var chars = "";
  var buildPassword = "";
  if (passwordCriteria.useUppers.toUpperCase() === "Y") {
    chars = chars+upperChar;
  }
  if (passwordCriteria.useLowers.toUpperCase() === "Y") {
    chars = chars+lowerChar;
  }
  if (passwordCriteria.useNumbers.toUpperCase() === "Y") {
    chars = chars+numbers;
  }
  if (passwordCriteria.useSymbols.toUpperCase() === "Y") {
    chars = chars+symbols;
  }
  // build the password based on password length
  for (let index = 0; index < passwordLength; index++) {
    buildPassword += chars[Math.floor(Math.random() * chars.length)];
  }
  return buildPassword;
}

// Verify the password length is between 8 - 128 characters, otherwise ask again
function getPasswordLength() {
  var numDigits = prompt("Length of password (must be between 8 - 128 digits)");
  while (numDigits < 8 || numDigits > 128) {
   alert("Password must be between 8 and 128 digits");
   numDigits = prompt("Length of password (must be between 8 - 128 digits)");
  }
  return numDigits;
}

//  Add event listener to generate button
 generateBtn.addEventListener("click", writePassword);