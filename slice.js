/*var enteramonth=prompt("enter a month");

var firstchar=enteramonth.slice(0,1);
alert(firstchar); // prints first character from string just
var rest=enteramonth.slice(1);
alert(rest); // prints rest of the character except first character of  string

var add=firstchar+rest; // concatenate both spliced strings
alert(add);  */


var enter=prompt("enter a month");

var check=true;
for(var i=0;i<enter.length;i++){
    if(enter.slice(i,i+1)===" "){
        alert("the string contains double spaces");
        check=false;
        break;
    }
    
}
if(check===true)
alert("no spaces in string found !");

