console.log ("I'm lincked")
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var pass_length = prompt ("Lenght of the pasword! [between 8 and 128]")
  if (pass_length >= 8 && pass_length <= 128){
    var include_nums = false, include_upper = false, include_special = false;

    if (confirm('Include numbers in password?')){
      include_nums = true
    }
    if (confirm('Include upper case in password?')){
      include_upper = true
    }
    if (confirm('Include special characters in password?')){
      include_special = true
    }

    var password = generatePassword(pass_length, include_nums, include_upper, include_special);
    var passwordText = document.querySelector("#password");
    console.log("passwordText")

    passwordText.value = password;
  } else {
    alert("Password length is invalid, needs to be between 8 and 128")
  }
}


function generatePassword(_length, includeNums, includUpper, includeSpecial) {
  var length = _length,
      lower_char = "abcdefghijklmnopqrstuvwxyz",
      nums = "0123456789",
      special = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~",
      fullSet = lower_char,
      retVal = "";

  if (includUpper){
    fullSet += lower_char.toUpperCase();
  }
  if (includeNums){
    fullSet += nums
  }
  if (includeSpecial){
    fullSet += special;
  }
  
  for (var i = 0, n = fullSet.length; i < length; ++i) {

      retVal += fullSet.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}
