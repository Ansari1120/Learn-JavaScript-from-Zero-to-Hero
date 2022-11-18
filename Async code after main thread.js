//Asynchronous code is always executed after the main thread
setTimeout(function() { //this code executed at the end.
    console.log('I am an asynchronous message');
}); // You can omit the 0

console.log('Test 1');

for (let i = 0; i < 10000; ++i) {
    doSomeStuff();
}

console.log('Test 2');

// The 'I am an asynchronous message' will be displayed when the main thread reach here

function doSomeStuff() {
    return 1 + 1;
}