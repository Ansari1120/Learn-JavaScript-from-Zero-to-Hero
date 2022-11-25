/*for(var i=0;i<5;i++){
    console.log(i);     //0 1 2 3 4 
}*/
/*for(var i=4;i<=8;i++){
    console.log(i);      //4 5 6 7 8
}*/

// decending printing 
/*for(var i=10;i>=1;i--){
   console.log(i);   // 10 9 8 7 6 5 4 3 2 1 
}*/

//printing table using for loop through user input : 

/*var num=parseInt(prompt("enter a number for table ?"));

for(var i=1;i<=10;i++){
    console.log(num+" X "+i+" = "+(num*i));
}*/

// breake and continue

/*for(var i=0;i<7;i++){
    if(i==3)
    continue;                      // 0 1 2 4 5 6 
    console.log(i);
}*/

/*
// prime numbers 

var num=parseInt(prompt("enter a number to check "));
var isprime=true;
for(var i=2;i<num;i++){
    result=num%i;
    if(result==0){
        console.log("this number : " + num +" is not prime ! "+ "  checked at "+i);
isprime=false;
        break;
    }
}
if(isprime){
    console.log("this number : " + num +" is prime ! "+ "  checked at "+i);
}*/




/*for(var i=0;i<5;i++){
    for(var j=0;j<3;j++){
        console.log("I : "+i+" J : "+j);
    }
}*/
/*
var i=0;
do{
    console.log(i);
    i++;
}while(i < 10);
*/



/*
// while loop example another
var cond=true;
while(cond){
    console.log("hey there !");
    var asking=prompt("want to continue press Y or y to exit press other key...");
    if(asking.toLowerCase() !== "y"){
        cond=false;
    }
}
console.log("loop breaks game exit!");//:63 hey there !  loop breaks game exit!
*/

// for of loop 
let arr=[1,2,4,6,7,8,9,2,3,44,44,6,3,1,6,7,9,56,33];

for(let array of arr ){
     console.log(array);
}

//for of example 02 :
const cars = ["BMW", "Volvo", "Mini"];

let text = "";
for (let x of cars) {
  text += x + "\t";
}
document.getElementById("demo").innerHTML=text;

// for in loop
let garih = {
    year : 2020,
    model : "A8",
    color : "black",
    engine : "V8"
};

for(let atr in garih){
    console.log(atr);
}
    

let arrried=["ahmed","ali","ansari"];
arrried.forEach(element => {
    console.log(element);
});

let arrOfArrays = [];
for (let i = 0; i < 3; i++){
 arrOfArrays.push([]);
 for (let j = 0; j < 7; j++) {
 arrOfArrays[i].push(j);
 }
}
console.table(arrOfArrays);