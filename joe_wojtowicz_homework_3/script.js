// Assignment Code
var generateBtn = document.querySelector("#generate");

//possible pass values
var lowerCaseString = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseString = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberString = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacterString = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];
var choice;

//input variables 
var characterNumbers;
var lowerCaseConf;
var upperCaseConf;
var numberConf;
var specialCharConf;
var confirm;

//empty string
var resultString = "";

generateBtn.addEventListener("click", function () {
  pass = generatePassword();
  document.getElementById("password");
});


function generatePassword() {
  characterNumbers = parseInt(prompt("How many characters would you like your password to be?"));
  if (!characterNumbers) {
    alert("Please enter a number");
  }
  else if (characterNumbers < 8 || characterNumbers > 128) {
  characterNumbers = parseInt(prompt("Please enter a number from 8 - 128"));
  } else {
  lowerCaseConf = confirm("Would you like lowercase letters?");
  upperCaseConf = confirm("Would you like uppercase letters?");
  numberConf = confirm("Would you like numbers?");
  specialCharConf = confirm("Would you like special characters?");
  };

  if (!lowerCaseConf && !upperCaseConf && !numberConf && !specialCharConf) { 
    choice = alert("Please choose critera");
  }
  else if (lowerCaseConf && upperCaseConf && numberConf && specialCharConf) {
    choice = lowerCaseString.concat(upperCaseString, numberString, specialCharacterString);
  }

  else if (lowerCaseConf && numberConf && specialCharConf) {
    choice = lowerCaseString.concat(upperCaseString,numberString);
  }

  else if (upperCaseConf && numberConf && specialCharConf) {
    choice = lowerCaseString.concat(upperCaseString,specialCharacterString);
  }

  else if (upperCaseConf && lowerCaseConf && specialCharConf) {
    choice = specialCharacterString.concat(upperCaseString,lowerCaseString);
  }

  else if (upperCaseConf && lowerCaseConf && numberConf) {
    choice = upperCaseString.concat(lowerCaseString,numberString);
  }

  else if (upperCaseConf && numberConf) {
    choice = upperCaseString.concat(numberString);
  }

  else if (specialCharConf && lowerCaseConf) {
    choice = specialCharacterString.concat(lowerCaseString);
  }

  else if (upperCaseConf && lowerCaseConf) {
    choice = upperCaseString.concat(lowerCaseString);
  }

  else if (lowerCaseConf && numberConf) {
    choice = lowerCaseString.concat(numberString);
  }

  else if (numberConf && specialCharacterConf) {
    choice = numberString.concat(specialCharacterString);
  }

  else if (specialCharConf && upperCaseConf) {
    choice = specialCharacterString.concat(upperCaseString);
  }
  
  else if (upperCaseConf) {
    choice = upperCaseString;
  }

  else if (lowerCaseConf) {
    choice = lowerCaseString;
  }

  else if (numberConf) {
    choice = numberString;
  }

  else if (specialCharConf) {
    choice = specialCharacterString;
  };
  console.log(choice)
  
  var password = [];
  var emptyString = ""

  //begin random selection
  for (var i = 0; i <= characterNumbers; i++) {
    password.push(choice[Math.floor(Math.random() * choice.length)])
    }
   for (var i = 0; i < password.length; i++) {
     emptyString += password[i];
   } 
  console.log(emptyString)

  console.log(password)
  
    
    
    document.getElementById("password").textContent = emptyString
    
  }











// Write password to the #password input
function writePassword() {
  var characterNumbers = getCharacterNumbers()
  var characterType = getCharacterType()
  
  

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button

