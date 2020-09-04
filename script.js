// Assignment Code

var generateBtn = document.querySelector("#generate");

// Create variables for the password parameters

var numbers = ["123456789"];
var lowerCases = ["abcdefghijklmnopqrstuvwxyz"];
var upperCases = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var special = ["!@#$%^&*~+{/;}]"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Create a function for Generate Password
// Creates a prompt for user to input password length
// Set conditions for length of password
// set a loop for when conditons for password length not met

function generatePassword() {
  var passwordLength = prompt(
    "Please choose how many characters you would like for your password between 8 and 128"
  );

  if (passwordLength >= 8 && passwordLength <= 128) {
    alert(
      "Thanks. The amount of characters in your password will be" +
        passwordLength
    );
  } else {
    alert("Your number must be between 8 and 128");
    generatePassword();
  }

  // Create prompts for your other password parameters
  // Reminder that for confirm prompts. Ok = True, Cancel = False
  var numbers = confirm("Do you want numbers in your password?");

  console.log(numbers);

  var lowerCases = confirm("Do you want lowercases in your password?");

  console.log(lowerCases);

  var upperCases = confirm("Do you want uppercases in your password?");
  console.log(upperCases);

  var special = confirm("Do you want special characters in your password?");
  console.log(special);
}

//Next Steps? lost here
//for (var i = 0; i < passwordLength; i++) {
//var password = password }

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);
