//object
let dog = { dogName: "JavaScript",  // object properties
 weight: 2.4,   
 color: "brown", 
 breed: "chihuahua"
 };

 class Guy {  // class name
    constructor(age,covid){  // constructor and its parameters passed
        this.age = 56 
        this.covid = false 
    }

 }
 let obj = new Guy("age","covid"); // object creation , arguments
 console.log(obj);


//classes as spacial functions

function Ship(size,manfactyear,floors,type,route){
    this.size=size;
    this.manfactyear=manfactyear;
    this.floors=floors;
    this.type=type;
    this.route=route;
}
let ship = new Ship("210000 Tons",2008,4,"84CB","atlantic ocean");
console.log(ship);

//above function can also be turned into actual class syntax likee this
class Shippy{
    constructor(size1,manfactyear1,floors1,type1,route1){
        this.size1=size1;
        this.manfactyear1=manfactyear1;
        this.floors1=floors1;
        this.type1=type1;
        this.route1=route1;
    }
}
let ship1 = new Shippy("56000 Tons",2000,2,"21.33b","pacific ocean");
console.log(ship1);
console.log("the ship of class : ",ship1.type1," follows the pathway of ",ship1.route1);


// a class with a method
class Person{
    constructor(fname,lastname){
        this.fname=fname;
        this.lastname=lastname;
    }
    greet(){
        console.log("hey there ! my name is ",this.fname," and my father name is : ",this.lastname);
    }
}

let obj3 = new Person("Ahmed Ali Ansari","Asghar Ali Ansari");

obj3.greet();


// locking properties
class Person2 {
    #firstname2;
    #lastname2;
    constructor(firstname2, lastname2) {
    this.#firstname2 = firstname2;
    this.#lastname2 = lastname2;
    }
   }

let res = new Person2("ahmed","ali");
console.log(res.firstname2); // undefined.


// get set
class Gumnaam{
    #badnaam;
    #Khabar;
    constructor(badnaam,Khabar){
        this.#badnaam = badnaam;
        this.#Khabar = Khabar;
    }
    get badnaam(){
        return this.#badnaam;
    }
    set badnaam(badnaam){
        this.#badnaam = badnaam;
    }
    get Khabar(){
        return this.#Khabar;
    }
    set Khabar(Khabar){
        this.#Khabar = Khabar;
    }
}
let num = new Gumnaam("mien","nahi");
console.log(num.Khabar); // nahi
num.badnaam = "tum";
console.log(num.badnaam); // mein updated to tum



// Inhertiance
class Vehicle{
    constructor(type1,typ2,typ3,minspeed,maxspeed,){
        this.type1 = "two wheeler";
        this.typ2 = " 4 wheeler";
        this.typ3 = "Tempo";
        this.maxspeed = "78kmph";
        this.minspeed = "35kmph";
    }
    move(){
        console.log("the ",this.typ2," is moving at the speed of ",this.minspeed);
    }
}
class Motorcylce extends Vehicle{
    constructor(type1,maxspeed,fuel,company,fuel2){
           super(type1,maxspeed);
           this.fuel = "12 liters";
           this.company = "Honda VXR";
           this.fuel2 = fuel2;
    }
    classify(){
        console.log("look at the ",this.company," of ",this.type1,
        " moving at the speed of ",this.maxspeed," with fuel of ",this.fuel);
    }
    another(adjust){
        this.fuel = adjust;
    }
}

let val = new Motorcylce();
val.classify();
//val.fuel2("20 liters");
val.another("20 liters");
val.classify();

// prototype
class Student{
    constructor(sem,id){
        this.sem = sem;
        this.id = id;
    }
    introduce(){
        return "hey there from : "+this.sem+" of id : "+this.id;
    }
}
Student.prototype.introduce = function(){    // added new function through prototype
    console.log("new function added to the class Student !");
};
Student.prototype.Gpa = 3.52;        // added new property of object into constructor through prototype
let showcase = new Student("Ahmed","4th");
console.log(showcase,showcase.Gpa);