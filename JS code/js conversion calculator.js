let miles_tokilometer = 1.60934 //conversion factor
let inch_to_cm = 2.54;
let kilo_to_pound = 2.2046;
var ask = prompt("enter distance in miles : "); // ask for input
console.log(ask," miles");
var ask1 = prompt("enter distance in inches : "); // ask for input
console.log(ask1," miles");
var ask2 = prompt("enter weight in kilo : "); // ask for input
console.log(ask2," miles");

//to convert miles into kilometer follow below formula
let kilometer = ask * miles_tokilometer;
let pounds = ask2 * kilo_to_pound;
let cm = ask1 * inch_to_cm;

let sentence = "the distance of : "+kilometer+" kilometers"+" is equal to "+ask+" miles";
console.log(sentence);

let sentence1 = "the distance of  : "+cm+" centimeters"+" is equal to "+ask1+" inches";
console.log(sentence1);

let sentence2 = "the weight : "+pounds+" pounds"+" is equal to "+ask2+" kilos";
console.log(sentence2);
