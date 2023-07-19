var arr=["same","casey","Dewayne","Rexha"];
for(var i=0;i<arr.length;i++){
    console.log(arr[i]);  // printing array values one by one
}


var arr2=[45,44,45,96,32,1,2,47,58,56,22];
for(var i2=0;i2<arr2.length;i2++){
    arr2[i2]=arr2[i2]*2;
}
for(var j=0;j<arr2.length;j++){
    console.log(arr2[j]);  // printing array values one by one
}


var arr2=[45,44,45,96,32,1,2,47,58,56,22];
for(var i2=0;i2<arr2.length;i2++){
    arr2[i2]=arr2[i2]*2;
}
for(var j=0;j<arr2.length;j++){
    console.log(arr2[j]);  // printing array values one by one
}

// check a value present in an array or not  searching a number

var arrayy=[54,44,28,4,6,2,1,3,6,47];

var searchnum=parseInt(prompt("Enter a number to check "));
var found=false;
for(var f=0;f<arrayy.length;f++){
    if(arrayy[f]===searchnum){
        console.log("entered number : "+searchnum+" found at index : "+f);
        found=true;
        break;
    }
}
if(found==false){
    console.log("your entered value is not found !");
}




