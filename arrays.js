var array=[45,33,12,44,11]; //range 0 to -1
var menu=["sandwich","pizza","french fries","burger"];
var bools=[true,false,true,true,false];
var mixed=["hello",45.2,"#"];
var mixed2=[{sequnce : "mike"},{force : "afterwards 56 "}];
console.log(array[2]);  // accessing array elements
console.log(menu);
console.log(bools[3]);
console.log(mixed.length);
console.log(mixed2[1]);
console.log(mixed2[3]);  // undefined since the value is not at the given index

// add update elements using index

var adding=[];

adding[0]="a";
adding[1]="e";
adding[2]="i";
adding[3]="o";

console.log(adding);  // all arrays can printed
console.log(adding=>2);
console.log(adding[6]); // undefined
adding[11]="se";
console.log(adding+" "+adding.length);  // directly adding value jumping empty indexes.

//updating an 
adding[2]="rt";
console.log(adding);


// array push 

var pushing=[];

pushing.push(31);
pushing.push("hexadecimal");
pushing.push("somewhat","exactly");
console.log(pushing);

//array user input , order shop


do{
    var order=prompt("what do you want sir select category drink or  meal ");
var i;
var drink_cost=32;
var meal_cost=78;
var items_purchased=[];
var howmany=parseInt(prompt("enter quantity"));
var orderagain=prompt("do you want to place more orders: say yes or no");
    switch(order){
        case "drink":
            total_paybill=drink_cost*howmany;
            console.log("your paybill is : "+total_paybill+" each costs : "+drink_cost+"$");
            items_purchased.push(order);
            break;
            case "meal":
                total_paybill=meal_cost*howmany;
                console.log("your paybill is : "+total_paybill+" each costs : "+meal_cost+"$");
                items_purchased.push(order);
                break;
    }
   
}while(orderagain=="yes");
console.log(items_purchased);




