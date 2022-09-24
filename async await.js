 /**
  *    // EXAMPLE 01
function greet(x){    // a first function is made 
    const myprom=new Promise(resolve =>{ // adding promise with set time out function of 2 seconds delay
        setTimeout(() => {
            resolve("Something will happen as : "+x); // the settimeout body executes afet 2 seconds delay
        }, 2000);
    });
    return myprom    // promise object name return
}

async function greetcatcher(x){   // async funtion 
    const talkout= await greet(x);   // greet catcher waits for timout of 2 seconds held off to show message inside promise
    console.log(talkout);           // message under await , where await waits 2 seconds for first function called.
}
greetcatcher("function called after 2 sec delay !");   // function message print run after 2 seconds.
console.log(1+"delay break");
greetcatcher("function called after 2 sec delay second time !");
console.log(2+"delay break");
greetcatcher("function called after 2 sec delay third time !");
console.log(3+"delay break");
  *  */


/**     // EXAMPLE 02
 * async function myDisplay() {
    let myPromise = new Promise(function(resolve) {
        setTimeout(() => {
            resolve("I love You !!");

        }, 3000);
    });
    document.getElementById("demo").innerHTML = await myPromise;
  }
  
  myDisplay();

 * 
 */


  /** 
   // THROUGH AJAX CALLOUT OTHER EXTERNAL/INternal PAGES alongwith async and promise , await 
          async function getFile(){
            let promi=new Promise(function (resolve,reject){
            let req = new XMLHttpRequest();  // ajax calling 
            req.open("GET","index.html");  // giving path and operation to perform on triggered file here open file.
            req.onload = function(){
                if(req.status == 200){
                    resolve(req.response);
                }
                else{
                    reject("file not availble in the triggered directory !");
                }
            
            };
            req.send();
            });
            document.getElementById("demo").innerHTML = await promi;
            }
            getFile();  //callout whole function
   * 
   * 
  */
          

const passtypes =["abc","adx"];

function checkout(pass){
    return passtypes.includes(pass);
}
function login(password){
return  new Promise((resolve,reject) => {
  if(checkout(password)){
    resolve({
status : true ,
show : "Logged in sucessfully"
    });
  }
  else{
    reject({
        status : false 
            });
  }
});
}
function checkout2(pass){
    login(pass)
    .then(token => {
    console.log("Approve:");
    console.log(token);
    })
    .catch(value => {
    console.log("Reject:");
    console.log(value);
    })
}
//var ask =prompt("enter password :");
const x = document.getElementById("ok");
var ano = x.value;
//checkout2(ano);






