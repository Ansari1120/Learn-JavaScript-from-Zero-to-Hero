//Asynchronous code using setInterval
let counter = 0;

let timer = setInterval(function() {
    console.log('I am an asynchronous message');

    counter += 1;

    if (counter >= 5) {
        clearInterval(timer);
    }
}, 2000);

console.log('I am a synchronous message');

//setInterval has the same behavior as setTimeout but the code is executed multiple times. 
//You have to call clearInterval to kill the timer.

// Performing an HTTP request
// Any I/O operation when you are in a NodeJS environment
// Dealing with a WebSocket (client or server side)