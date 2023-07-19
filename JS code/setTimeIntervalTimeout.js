/*setInterval(encourage, 5000); // time delay 500 ms (mili seconds)  ,  encourage passed as an argument into callback form
function encourage() {
 console.log("You're doing great, keep going!");
 console.log("You're doing great, stoping!");
}// the function keeps work after 5 thausand mili second delay and second time it works again after 5k ms delay
*/

// set timeout
 
setTimeout(myfunction,300); // the function works out after 300 milisecond crossed 
function myfunction(sumup){
   var sumup = 6+6;
   return console.log(sumup);
}

setInterval(myFunction2, 1000);// with interval of every second time works out.

function myFunction2() {
  let d = new Date();
console.log(d.getHours() + ":" +
d.getMinutes() + ":" +
d.getSeconds());
}

