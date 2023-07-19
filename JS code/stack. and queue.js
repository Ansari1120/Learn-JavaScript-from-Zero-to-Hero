var values =[];

values.push("car");
values.push("bike");
values.push("truck");
values.push("tanker");
values.push("airplane");
console.log(values);   // print all values in stack
console.log(values.length);  // length 5
var v1=values.pop();   // airplane removed
var v2=values.pop();   // tanker removed
console.log(v1);  //printing poped value
console.log(v2);  //printing poped value

console.log(values);   // print all values in stack
console.log(values.length);  // length 3


// queue 
var values1 =[];

values1.push("sam");
values1.push("mike");
values1.push("zack");
values1.push("finn");
values1.push("frade");
console.log(values1);   // print all values in stack
console.log(values1.length);  // length 5
var v3=values1.shift();   // sam removed
var v4=values1.shift();   // mike removed
console.log(v3);  //printing poped value
console.log(v4);  //printing poped value

console.log(values1);   // print all values in stack
console.log(values1.length);  // length 3


values1.unshift("jenny"); // added at the top of the stack
console.log(values1);
console.log(values1[0]);  //showed here 