

// function
function sum(a,b){  // <- parameter
    return console.log(a+b);
}
function multiply(c,d){  // <- parameter
   var result=c*d;   // local variable
   console.log(result);
}
function showmessage(message){
    console.log(message);
}
//invoke function
sum(1,2); // <- arguments
sum(); // undefined
showmessage("hey there !");
multiply(3,2);
multiply(12,7);


/*function calculate_Score(enter_subjects,enter_marks){
   // var enter_subjects=parseInt(prompt("enter Number of subjects"));
    //var enter_totalnumber=parseInt(prompt("enter total number of your total subjects"));
    var add_subjects;
    var enter_marks;

 
    for(var i=0;i<3;i++){
        var x = prompt("Enter a Value", "0");
        var num1 = parseInt(x);
    //    enter_marks=Number(prompt("enter marks"));
        add_subjects+=num1;
    }
    
  
    console.log(add_subjects);
    return add_subjects;
} 
function percentage(add_subjects,enter_totalnumber){
    var perc=(add_subjects/enter_totalnumber)*100;
    console.log(perc);
    return perc;
}
function grade(perc){
    if(perc>=85 && perc<=80){
        console.log("Grade A");
    }
    else if(perc>=75 && perc<=70){
        console.log("Grade B");
    }
    else if(perc>=65 && perc<=60){
        console.log("Grade C");
    }
    else{
        console.log("Fail !");
    }
}


calculate_Score();
percentage();
grade();
*/

var score; // global variable
function calculate_percentage(sub1,sub2,sub3,sub4,sub5){
    return (sub1+sub2+sub3+sub4+sub5)/5;
}
function grade(score){
    if(score>=85 && score<=100){
        console.log("Grade A");
    }
    else if(score>=75 && score<=84){
        console.log("Grade B");
    }
    else if(score>=65 && score<=74){
        console.log("Grade C");
    }
    else{
        console.log("Fail !");
    }
}
//global vaiables
var checkscore1=calculate_percentage(45,33,67,53,89);
var checkscore2=calculate_percentage(89,93,87,91,34);
var checkscore3=calculate_percentage(89,78,87,84,78);
console.log(checkscore1);
console.log(checkscore2);
console.log(checkscore3);
grade(checkscore1);
grade(checkscore2);
grade(checkscore3);



// function expressions manipulations
function sum1(i,j){  // <- parameter
    return i+j;
}
function multiply2(g,h){  // <- parameter
 return g*h 
}
//multiply2(9,3); //27
console.log(sum1(5,2)-3); //4 left to right calculation
console.log(sum1(multiply2(4,5),9));  // 4*5 = 20 , 20+9=29


/*// function expressions manipulations
function sum1(i,j){  // <- parameter
    return i+j;
}
function multiply2(g,h){  // <- parameter
 return sum(g,h)+8 // 7+8=15
}
//multiply2(9,3); //27
console.log(sum1(5,2)-3); //4 left to right calculation
*/
 
// function can be made using variable , note ! use var with variable name is not necessery
var joint = function (a,b){
    console.log(a+b);
    return a+b;
};
joint("jf",17);


// function hoisting 

var msg=energy("hoisting works ! ");
console.log(msg);  // executed.
var yo=joint(4,17);
console.log(yo);   // undefined


var joint = function (n,o){
    //console.log(a+b);
    return n+o;
};

function energy(message){
    return message;
}

/*
// arguments passed by value
var num=5;
var at = (a) =>  {
a=7; // a recieves 5 , it remains same no effect comes in.
};
at(num); // no change occur if a is passed by value.
console.log(num); 
// arguments passed by reference num , string boolean -> non primitive change occur.
var arr=[1,2,4,6];
function changeout(val){
    val[2]=44; // change occur in original array despite both variables are changed but pointing the same array
}
console.log(arr[2]); // before value  4
changeout(arr);
console.log(arr[2]); // updated value 44

// recursive function calling itself again and again until terminate condition met.
var ask=parseInt(prompt("Enter a number for factorial : ")); 
function recur(ask){
    if(ask<=1){
return 1;
    }
    else{
        return ask*recur(ask-1); //e.g : 4*(4-1)=12 -> 12*(3-1)=24 -> 24*(2-1)=24 
    }
}
console.log(recur(ask));    */



// arrow functions 


//function doingStuff(x) {
//    console.log(x);
//   }


//convert into arrow function

var doingstuff = x => {
console.log("arrow function variable passing with argmuemnt named x"+x);
}
doingstuff("yo");


let add = (x,y) =>{
    console.log(x+y);
}
add(1+4);

let arr = ["apple","banana","Mango"];
arr.forEach(e => console.log(e));

