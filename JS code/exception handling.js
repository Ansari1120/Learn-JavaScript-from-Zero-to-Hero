
//try catch 
/*try{
         var greeting = "Hello world!";
         aler(greeting);

 }
 catch(err){
  alert(err);
 }*/


 function checkpassword(){
try {
    var get=document.getElementById("f1").value;
    if(get.length<8){
        throw "please enter atleast 8 characters";
    }
    if(get.indexOf(" ") !== -1){
        throw "you can't use spaces in password";
    }
    var checknumber=true;
   for(var i=0;i<get.length;i++){
    if(isNaN(get(i,i+1))===false){
        checknumber=true;
        break;
    }
    if(checknumber===false){
        throw "must include at least 1 number";
    }
   }
   alert("password submitted !");
} catch (err) {
    alert(err);
}
 }