// Call stack and callback queue
// JavaScript works with a call stack, and all the actions that it has to execute
// are queued up here. The event loop is a process that is constantly
// monitoring this call stack, and whenever there are tasks to do, the event
// loop does them one by one. The tasks on top get executed first.


console.log("Hi there");
setTimeout(() => console.log("Sorry I'm late"), 3000);
console.log(add(4, 5));
function add(x, y) {
 return x + y;
}