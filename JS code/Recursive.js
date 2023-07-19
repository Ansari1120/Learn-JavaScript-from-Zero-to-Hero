// function getRecursive(nr) {
//     console.log(nr);
//     if (nr > 0) {
//     getRecursive(--nr);
//     }
//    }
//    getRecursive(3);

//see another version

function logRecursive(nr) {
    console.log("Started function:", nr);
    if (nr > 0) {
    logRecursive(nr - 1);
    } else {
    console.log("done with recursion");
    }
    console.log("Ended function:", nr);
   }
   logRecursive(3);

//    Recursive functions can be great in some contexts. When you feel the need
//    to call the same function over and over again in a loop, you should probably
//    consider recursion. An example could also be searching for something.
//    Instead of looping over everything inside the same function, you can split
//    up inside the function and call the function repeatedly from the inside.


   