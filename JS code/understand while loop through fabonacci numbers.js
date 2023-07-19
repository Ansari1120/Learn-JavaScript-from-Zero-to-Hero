let nr1 = 0;
let nr2 = 1;
let temp;
fibonacciArray = [];
while (fibonacciArray.length < 25) {
 fibonacciArray.push(nr1);
 temp = nr1 + nr2;
 nr1 = nr2;
 nr2 = temp; 

}
console.log(fibonacciArray);
