// this is a keyword used with objects refers to the current used object.
// object binding 
const person = {
  fname : "Ahmed",
  lastname : "Ali",
  id : 1402,
  my : function() {
    return this.fname + " " + this.lastname;   
  }
};

person.my();

const person1 = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const person2 = {
    firstName:"John",
    lastName: "Doe",
  }
  
  // Return "John Doe":
  person1.fullName.call(person2);


 // function binding another 
  const per = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      return console.log(this.firstName + " " + this.lastName);
    }
  }
  
  const member = {
    firstName:"Hege",
    lastName: "Nilsen",
  }
  
  let fullName = per.fullName.bind(member);