// Assignment Code
var generateBtn = document.querySelector("#generate");
var textArea = document.createElement('div')
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){

  var length = window.prompt("How many characters? (8-25)"),
      lowercaseQ = window.confirm("Do you want lowercase characters?"),
      uppercaseQ = window.confirm("Do you want uppercase characters?"),
      numberQ = window.confirm("Do you want numbers?"),
      specialQ = window.confirm("Do you want special characters?"),
      lowerCharacters = "abcdefghijklmnopqrstuvwxyz",
      upperCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      numbers = "0123456789",
      specCharacters = "!#$%&'()*+,-./:;<=>?@^_`{|}~",
      answers = "";
      passWord = "";

if (lowercaseQ) answers += lowerCharacters;
if (uppercaseQ) answers += upperCharacters;
if (numberQ) answers += numbers;

if (specialQ) answers += specCharacters;

    for (var i = 0; i < length; i++) {
      var maxnumber = answers.length;
      // Need to code a way to random select values in the string of answers while following the rules set
      var randomNum = Math.floor(Math.random()*(answers.length));
      var charToInsert = answers.charAt(randomNum);
      passWord += charToInsert;
    };
    return passWord;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
