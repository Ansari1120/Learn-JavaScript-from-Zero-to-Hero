function getToastPromise() {
    return new Promise((resolve, reject) => {
      let wifeMood = 6;
      setTimeout(() => {
        if (wifeMood >= 5) {
          resolve("toast is ready");
        } else {
          reject("im in a bad mood");
        }
      }, 2000);
    });
  }
  //getToastPromise();
  
  function getFryPromise() {
    return new Promise((resolve, reject) => {
      let wifeMood = 6;
      setTimeout(() => {
        if (wifeMood >= 5) {
          resolve("Egg is Fried !");
        } else {
          reject("im in a bad mood");
        }
      }, 3000);
    });
  }
  
getToastPromise()
.then((arg)=>{
    console.log(arg);
    return getFryPromise();
})
.then((arg)=>{
    console.log(arg);
})
.catch((error)=>{
    console.log(error);
});
  