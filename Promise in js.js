function getToastPromise() {
  return new Promise((resolve, reject) => {
    let wifeMood = 3;
    if (wifeMood >= 5) {
      resolve("toast is ready");
    } else {
      reject("im in a bad mood");
    }
  });
}
getToastPromise()
  .then((arg) => {
    console.log(arg);
  })
  .catch((error) => {
    console.error(error);
  });
