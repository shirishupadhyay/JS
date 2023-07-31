function isPrime(){
  if(num<=1){
    return false;
  }
  for(var i = 2; i<num; i++){
    if(num%i==0){
      return false;
    }
  }
  return true;
}

var num = 10;
console.log("Is"+ " " + num + " " + "a prime number? "+ isPrime());
