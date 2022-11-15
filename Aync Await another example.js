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

//await await
async function getResult() {
  try {
    let result = await getToastPromise(); // wait for result to occur eith in the form of reject or resolve
    console.log(result);
    let eggResult = await getFryPromise(); // wait for second promise  result to occur eith in the form of reject or resolve
    console.log(eggResult);
  } catch (error) {
    console.log(error);
  }
}

getResult(); //calling aync function.
