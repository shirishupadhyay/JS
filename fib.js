function FibonacciSeries(n){
  var fibSeries = [0, 1]
  for(var i = 2; i<n; i++){
    fibSeries[i] = fibSeries[i-1]+ fibSeries[i-2];
  }
  return fibSeries;
}
var count = 20;
var fibonnaciSeries = FibonacciSeries(count);
console.log("Fibonnaci Series: ");
console.log(fibonnaciSeries);
