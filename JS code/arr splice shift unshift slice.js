var arr=["some","People","have","curly","brown","hair"];

arr.splice(2,2,"must"); //adding element at index 2 removing index 2 past element.

console.log(arr);
arr.shift();  // remove first element in the array
console.log(arr);

arr.unshift("yo","man"); // add elements at the beginning of the array
console.log(arr);