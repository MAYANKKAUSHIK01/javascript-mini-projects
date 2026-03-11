const passwordBox = document.getElementById("password");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const specialChar = "!@#$%^&*()_+-={}[]|:;<>,.?/~";
const allChar = upperCase+lowerCase+numbers+specialChar;

function Generator(){
   let password = "";
   password+=upperCase[Math.floor(Math.random()*upperCase.length)];
   password+=lowerCase[Math.floor(Math.random()*lowerCase.length)];
   password+=numbers[Math.floor(Math.random()*numbers.length)];
   password+=specialChar[Math.floor(Math.random()*specialChar.length)];
   while(length>password.length){
       password+=allChar[Math.floor(Math.random()*allChar.length)];
   }

   passwordBox.value = password
}

function copypassword(){
  passwordBox.select();
  document.execCommand("copy")
}