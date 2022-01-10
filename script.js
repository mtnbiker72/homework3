// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
function generatePassword() {
  const passwordLength = getPasswordLength();
  const passwordCriteria = getPasswordCriteria();
  const password = getPassword(passwordLength, passwordCriteria);
  return password;
}

function getPasswordCriteria() {
  var useUppers = prompt("Would you like to use characters in your password? (Y/N");
  var useLowers = prompt("Would you like to use characters in your password? (Y/N");
  var useNumbers = prompt("Would you to use numbers in your password? (Y/N");
  var useSymbols = prompt("Would you to use symbols in your password? (Y/N");
  while (useUppers.toUpperCase() !== "Y"  && useLowers.toUpperCase() !== "Y" && useNumbers.toUpperCase() !== "Y" & useSymbols.toUpperCase() !== "Y") {
    alert("You must select at least one criteria to generate a password");
      useUppers = prompt("Would you like to use characters in your password?");
      useLowers = prompt("Would you like to use characters in your password?");
      useNumbers = prompt("Would you to use numbers in your password?");
      useSymbols = prompt("Would you to use symbols in your password?");
  }
  return {
    "useUppers": useUppers,
    "useLowers": useLowers,
    "useNumbers": useNumbers,
    "useSymbols": useSymbols,
  }
}

const lowerChar = "abcdefghijklmnopqrstuvwxyz";
const upperChar = "ABCDEFGHIJKLMNOPRSTUVWXYZ";
const numbers = "1234567890";
const symbols = "~!@#$%^&*()_+{}:?";

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
  for (let index = 0; index < passwordLength; index++) {
    buildPassword += chars[Math.floor(Math.random() * chars.length)];
  }
  return buildPassword;
}

function getPasswordLength() {
  var numDigits = prompt("Password length must be between 8 - 128");
  while (numDigits < 8 || numDigits > 128) {
   alert("Password must be between 8 and 128 digits");
   numDigits = prompt("Password length must be between 8 - 128");
  }
  return numDigits;
}

//  Add event listener to generate button
 generateBtn.addEventListener("click", writePassword);
