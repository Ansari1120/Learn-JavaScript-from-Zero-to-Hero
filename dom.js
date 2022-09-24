//document.querySelector(".heading1").textContent = "hello World";

//const text = "hey there !"
//document.querySelector(".heading1").textContent =text;


// we can things through id or class for id we use # and for class we use dot (.)

// const input = prompt("enter your name !");

// document.querySelector("#heading1").textContent = 'welcome ${input}';


// document.getElementById
// document.getElementsByClassName
// document.getElementsByTagName
// all above can be done by query selector.

// const btn =  document.querySelector("#submit")   //addeventlistener is function
// btn.addEventListener("click",function (){
// document.querySelector("#heading1").textContent = "The button is clicked by you !";
// })





const btn =  document.querySelector("#submit")   //addeventlistener is function
const age_input = document.querySelector("#myage")
btn.addEventListener("click",function (){
document.querySelector("#heading1").textContent = `your age is : ${age_input.value}`
})