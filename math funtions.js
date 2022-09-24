var num=(54+33+1-11)/21;  
console.log(num); //3.6666666666666665
var rounded=Math.round(num);
console.log(rounded);  //4
var round3=num.toFixed(2);
console.log(round3);  //3/67
var powerr=Math.sqrt(rounded);
console.log(powerr);  //2

var logg=Math.log(rounded);
console.log(logg);  //1.33

var expp=Math.exp(rounded);
console.log(expp);  // 54.59 = 

var num2=[45,55,57,99,63,5];
var found=Math.max(num2);
console.log(found);

var random1=Math.random();

var another=(random1*6); //here we found a random number grater than 0 

var another2=Math.floor(another); //round of the number

var ask=parseInt(prompt("Enter a number to guess for a dice role "));

if(ask===another2){
    console.log("you had won a prize bond !");
}
else{
    console.log("better luck next time !");

}

