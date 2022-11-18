// //First promise example

// var promise = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         resolve('hello world');
//     }, 2000);
// });

// promise.then(function(data) {
//     console.log(data);
// });

// //Multiple Callbacks

// // var promise = new Promise(function(resolve, reject) {
// //     setTimeout(function() {
// //         resolve('hello world');
// //     }, 2000);
// // });

// // promise.then(function(data) {
// //     console.log(data + ' 1');
// // });

// // promise.then(function(data) {
// //     console.log(data + ' 2');
// // });

// // promise.then(function(data) {
// //     console.log(data + ' 3');
// // });

// //Error handling when error happen

// // var promise = new Promise(function(resolve, reject) {
// //     setTimeout(function() {
// //         reject('We are all going to die');
// //     }, 2000);
// // });

// // promise.then(function success(data) {
// //     console.log(data);
// // }, function error(data) {
// //     console.error(data);
// // });

// //When an error happens with multiple callbacks

// var promise = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         reject('We are all going to die');
//     }, 2000);
// });

// promise.then(function success(data) {
//     console.log(data + ' 1');
// }, function error(data) {
//     console.error(data + ' 1');
// });

// promise.then(function success(data) {
//     console.log(data + ' 2');
// }, function error(data) {
//     console.error(data + ' 2');
// });

// promise.then(function success(data) {
//     console.log(data + ' 3');
// }, function error(data) {
//     console.error(data + ' 3');
// });

// Calling resolve multiple times

var promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve('hello world 1');
        resolve('hello world 2');
        resolve('hello world 3');
        resolve('hello world 4');
    }, 1000);
});

promise.then(function success(data) {
    console.log(data);
});
