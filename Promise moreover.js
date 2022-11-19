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

// var promise = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         resolve('hello world 1');
//         resolve('hello world 2');
//         resolve('hello world 3');
//         resolve('hello world 4');
//     }, 1000);
// });

// promise.then(function success(data) {
//     console.log(data);
// });

//promise chain

// function test() {
//     return job().then(function(data) {
//         doSomething(data);
//     });
// }

//The pyramid of doom

// function test() {
//     return job()

//     .then(function() {
//         return job2();
//     })

//     .then(function() {
//         return job3();
//     })

//     .then(function() {
//         return job4();
//     })

//     .then(function() {
//         doSomething();
//     });
// }

//The ghost promise

// function job() {
//     if (test) {
//         return aNewPromise();
//     } else {
//         return Promise.resolve(42); // return an anto-resolved promise with `42` in data.
//     }
// }

//If you want to create an auto-rejected promise, use Promise.reject.

//The forgotten promise

// function test() {
//     var promise = job();

//     return new Promise(function(resolve, reject) {
//         promise.then(function(data) {
//             data = doSomething(data);
//             resolve(data);
//         }, function(error) {
//             reject(error);
//         });
//     });
// }
//You call a method that returns a promise but you create your own promise:

//Or

// function test() {
//     return job().then(function(data) {
//         return doSomething(data);
//     });
// }

//The catch method on a promise is pretty simple because it is an alias for then(null, errorCallback).

//Traps of Catch

// var promise = request();

// promise.catch(function(error) {
//     displayError(error);
// });

// // This is the same code as this:
// promise.then(null, function(error) {
//     displayError(error);
// });

// Example 1

// let promise = request();

// promise.then(function(data) {
//     console.log(data);
// }, function(error) {
//     console.error(error);
// });

// Example 2

// let promise = request();

// promise

// .then(function(data) {
//     console.log(data);
// })

// .catch(function(error) {
//     console.error(data);
// });

// To understand how to use then and catch directly, you can think of it as
//  pretty similar to using try { ... } catch { ... }.
// Let's take the 2 examples and express them in "pseudo-synchronous code"

//Example 1

// try {
//     let promise = request();
// } catch (error) {
//     console.error(error);
//     return;
// }
// console.log(data);

// Example 2

// try {
//     let promise = request();
//     console.log(data);
// } catch (error) {
//     console.error(error);
// }

//Try catch Promise

// function job() {
//     return new Promise(function(resolve, reject) {
//         reject();
//     });
// }

// let promise = job();

// promise

// .then(function() {
//     console.log('Success 1');
// })

// .then(function() {
//     console.log('Success 2');
// })

// .then(function() {
//     console.log('Success 3');
// })

// .catch(function() {
//     console.log('Error 1');
// })

// .then(function() {
//     console.log('Success 4');
// });

//Another Example

// function job(state) {
//     return new Promise(function(resolve, reject) {
//         if (state) {
//             resolve('success');
//         } else {
//             reject('error');
//         }
//     });
// }

// let promise = job(true);

// promise

// .then(function(data) {
//     console.log(data);

//     return job(false);
// })

// .catch(function(error) {
//     console.log(error);

//     return 'Error caught';
// })

// .then(function(data) {
//     console.log(data);

//     return job(true);
// })

// .catch(function(error) {
//     console.log(error);
// });

//Another Example

// function job(state) {
//   return new Promise(function (resolve, reject) {
//     if (state) {
//       resolve("success");
//     } else {
//       reject("error");
//     }
//   });
// }

// let promise = job(true);

// promise

//   .then(function (data) {
//     console.log(data);

//     return job(true);
//   })

//   .then(function (data) {
//     if (data !== "victory") {
//       throw "Defeat";
//     }

//     return job(true);
//   })

//   .then(function (data) {
//     console.log(data);
//   })

//   .catch(function (error) {
//     console.log(error);

//     return job(false);
//   })

//   .then(function (data) {
//     console.log(data);

//     return job(true);
//   })

//   .catch(function (error) {
//     console.log(error);

//     return "Error caught";
//   })

//   .then(function (data) {
//     console.log(data);

//     return new Error("test");
//   })

//   .then(function (data) {
//     console.log("Success:", data.message);
//   })

//   .catch(function (data) {
//     console.log("Error:", data.message);
//   });

//Promise.All , Incase of Multiple Asynchronous tasks have to do with single promise.

// function job(delay) {
//     return new Promise(function(resolve) {
//         setTimeout(function() {
//             console.log('Resolving', delay);
//             resolve('done ' + delay);
//         }, delay);
//     });
// }

// var promise = Promise.all([job(1000), job(2000), job(500), job(1500)]);

// promise.then(function(data) {
//     console.log('All done');
//     data.forEach(function(text) {
//         console.log(text);
//     });
// });

//Promise.race

// function delay(time) {
//     return new Promise(function(resolve) {
//         setTimeout(resolve, time, 'success ' + time);
//     });
// }

// Promise.race([delay(500), delay(100)]).then(function(data) {
//     console.log(data);
// });

