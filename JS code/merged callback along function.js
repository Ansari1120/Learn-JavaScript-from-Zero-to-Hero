function makeFryAnda(callback) {
  setTimeout(() => {
    callback("Egg Fried");
  }, 2000);
}
//function declaration 2 alogwith callback

function toastBread(cb) {
  setTimeout(() => {
    cb("toast Done");
  }, 3000);
}

//function invokation
toastBread(function (para) {
  console.log(para); //calbacking torasbread function 2
  makeFryAnda(function (para1) {
    console.log(para1);
  }); // callbacking function 1 (makefryanda)
});
