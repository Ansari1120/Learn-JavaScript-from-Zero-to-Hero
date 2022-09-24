/*

// object created named obj , promise inbuilt function called ! 
let obj=new Promise(function(resolve,reject){ // arugments rescolve , reject 
    let x = 3;
    if(x>1){
        resolve(x);
    }
    else(
        reject("too low")
    )
});

obj.then( // instacne of object used with then where then is function itself used to check if function worked out as required or not
function(value){
    console.log("Success ! ",value);
},
function(value){
console.log("Failure ! ",value);
}
);*/
/*
let promise = new Promise((work,notworked) => {
   var valued="1";
   //var checktype=typeof(valued);
 var checkout=true;
   if(isNaN(valued)){
    notworked("not a number");
   }
   else{
    work(valued);
    console.log("start counting ....");
   }
})
.then(value => {
    console.log(value);
    return 1;
})
.then(value => {
    console.log(value);
    return 2;
})
.catch(value => {
console.log(value);

})
*/
/*
// promise using callbacks
function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;}

function getFile(myCallback) {
    let req = new XMLHttpRequest();
    req.open('GET', "index.html");
    req.onload = function() {
      if (req.status == 900) {
        myCallback(req.responseText);
      } else {
        myCallback("Error: " + req.status);
      }
    }
    req.send();
  }
  getFile(myDisplayer);

*/
/*
//promise example 03
function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;}

    
let mypromise = new Promise (function (resolve,reject) {
    let req = new XMLHttpRequest();
  
    req.open('GET', "index.html");
    req.onload = function() {
      if (req.status == 200) {
        resolve(req.responseText);
      } else {
        reject("Error: " + req.status);
      }
    }
    req.send();
  });
  mypromise.then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}
  );*/
/*
  let myPromise = new Promise(function(myResolve, myReject) {
        setTimeout(function() { myResolve("I love You !!"); }, 3000); // message showed with the delay of 3 seconds
  });
  myPromise.then(function(value) {
    document.getElementById("demo").innerHTML = value;
  },
  function(error) {console.log(error);}
  );
 

  */

  //example 05 

  let vl=3;
  const theree=new Promise(function(resolve,reject){
if(vl==3){
  resolve("success");
}
else{
  reject("failure")
}
  }).then((e)=>{
    console.log(e);
    return "success 2";
  }).catch((err) =>{
console.log(err);
return "failure 2";
  });