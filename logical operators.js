var a=50;
var b=40;
var c=a>40 && a<60;
console.log(c); //true
var d=b<a && b>60;
console.log(d); // false
var e=a>30 || a<40;
console.log(e); //true
var f=b>a || b<39;
console.log(f) // false
var g=!(a>40);
console.log(g); // result false actually true
var h=!(b<36);
console.log(h); // resuot true actually false
var i=!false;
console.log(i); // answer will be true but actually false
var j=!!a;
console.log(j); // a is true then it becomes false then it becomes true