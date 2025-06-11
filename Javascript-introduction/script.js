// output statement
// printing statement
// print("Hello world") - python
// System.out.println("Hello world"); - java

console.log("Hello world"); // javascript output statement

// Variables
var a = 5;
console.log(a);

// Adding two numbers
var num1 = 10;
var num2 = 10;
console.log(num1 + num2); 

// Variable types in javascript
// var is a Global scope variable
// let is a local scope variable
// const is a constant variable

let num3 = 15;
let num4 = 20;
console.log(num3 - num4);

const num5 = 30;
const num6 = 30;
console.log(num5 + num6);

// Difference between var, let, const * Important for interview
var b = "Welcome to javascript"; // create
console.log(b);
var b = 500; // update
console.log(b);

let c = "MERN Stack";
console.log(c);
// let c = "Full Stack Development"; // loop hole method
console.log(c);

const d = "Developer";
console.log(d);
// d = "Tester";
// console.log(d);

// Interview question
// Hoisting - hoist(flag hoisting)
// Hoisting is the meaning of accessing before the intialization process
// var is the only variable type accpets this hoisting because it was a global variable
// let and const is not supported because it was local scope

console.log(name);
var name = "Narasimhan";
// let name = "Narasimhan";
// const name = "Narasimhan";