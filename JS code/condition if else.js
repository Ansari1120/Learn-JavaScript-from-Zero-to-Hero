// if else
/*var age =19;
if (age>18){
console.log("eligible for cnic");
}else{
console.log("not eligible for cnic");
}*/

// if else if

/*var per=prompt("What is your percentage ?");
var percentage=parseInt(per);

if(percentage>80){
    alert("your grade is A");
}
else if(percentage>70){
    alert("your grade is B");
}
else if(percentage>60){
    alert("your grade is C");
}
else {
    alert("you'r fail!");
}*/

// nested if 

var score=92;
if(score>80){
    alert("Grade A");
    if(score>90){
        alert("Got Trophy!");
    }
}
else{
   alert("fail");
}
// set of condtions with logical operators 

var value1="u";
if(value1==="a" || value1==="i" || value1==="e" || value1==="o" || value1==="u"){
    alert("its a vowel");
}
else{
    alert("its not a vowel");
}
