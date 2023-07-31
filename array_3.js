let num =[1 ,2 , 3, 4, 5, 6];
console.log("Initial Array is: "+ num);
let x = num.shift();
console.log("After shifiting: "+ num);
console.log("Shifted number is : "+ x);

num.unshift(10);
console.log("Unshift Array is: "+ num);
let nums = [1 ,2 , 3, 4, 5, 6];

//nums.splice(1,1);
//console.log("Num after splice: "+ nums)

//nums.splice(4, 1);
//console.log("Num after splice: "+ nums)
//(4, 1) = 4 is the index value of the array and 1 is the after value which is to be deleted

//nums.splice(1,4)
//console.log("Nums after splice: "+ nums);
num.splice(5,1,7);
console.log("the splice function: "+ num);
