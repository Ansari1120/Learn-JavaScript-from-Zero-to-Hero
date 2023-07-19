function makeFryAnda(callback) {
  setTimeout(() => {
    callback("egg fried");
  }, 2000);
}

function eggFriedCallback(param) {
  console.log(param);
}

makeFryAnda(eggFriedCallback);

console.log("end");
