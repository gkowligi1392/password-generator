// Assignment code here
var passwordArray = [];
var passwordResult = [];
var myPass = "";
var lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var nums = ['1','2','3','4','5','6','7','8','9','0'];
var specials = ['!','@','#','$','%','^','&','*','(',')','-','_','=','+','.','<','>','/','|'];

function generatePassword() {
  // ask user how many characters they want the password to be
  var length = window.prompt("How long should the password be? (Choose between 8 and 128 characters.)");
  length = parseInt(length);

  // if user enters a value that is not between 8 and 128, ask them to enter again
  while (length < 8 || length > 128 || length === null) {
    var length = window.prompt("How long should the password be? (Choose between 8 and 128 characters.)");
    length = parseInt(length);
    if (length >= 8 && length <= 128) {
      break;
    }
  }

  // confirm user choice
  var confirm = window.confirm("You entered " + length + ". Click OK to confirm, or cancel to enter again.");
  
  // if user confirms, prompt to choose other password criteria
  if (confirm) {
    var lowerChoice = window.confirm("Would you like to include lowercase letters?");
    if (lowerChoice) {
      passwordArray = passwordArray.concat(lower);
    }
    var upperChoice = window.confirm("Would you like to include uppercase letters?");
    if (upperChoice) {
      passwordArray = passwordArray.concat(upper);
    }
    var numberChoice = window.confirm("Would you like to include numbers?")
    if (numberChoice) {
      passwordArray = passwordArray.concat(nums);
    }
    var specialChoice = window.confirm("Would you like to include special characters?");
    if (specialChoice) {
      passwordArray = passwordArray.concat(specials);
    }
  }

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

  // populate the passwordResult array with random values from the passwordArray array
  for (var i = 0; i < length; i++) {
    passwordResult = passwordResult.concat(passwordArray[getRandomInt(0, passwordArray.length)]);
  }

  for (var i = 0; i < passwordResult.length; i++) {
    myPass = myPass.concat(passwordResult[i]);
  }

  console.log(myPass);
  window.alert("Your randomly generated password: " + myPass);
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
