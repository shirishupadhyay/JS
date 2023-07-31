function revString(str){
  return str.split("").reverse().join("");
}
var inputStr = "BOKACHODA";
var reversedString = revString(inputStr);
console.log("Reversed string is : " + reversedString);
