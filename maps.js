// we can actually access any element's key using string value
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  fruits.forEach(element => {
    console.log(element);
});

// .set() can be used to add new elements and update value of existing element

const arr = new Map();

arr.set("yo",3);
arr.set("hey you",31);
arr.set("there",6);
arr.set("hq",42);
arr.set("dwsx",7);
arr.set("downtown",91);
console.log("array before update");
arr.forEach(element1 => {
    console.log(element1);
});

// update element :
arr.set("hq",88);
console.log("array after update");
arr.forEach(element1 => {
    console.log(element1);
});

// delete element
arr.delete("yo");
console.log("array after delete");
arr.forEach(element1 => {
    console.log(element1);
});

// array size

console.log("array size "+arr.size);

//The has() method returns true if a key exists in a Map:
console.log("array has "+arr.has("downtown"));




  