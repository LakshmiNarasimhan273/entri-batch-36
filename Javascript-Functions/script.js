// Functions
// variable keyword - var, let, const
// variable name
// = operator
// variable value
// Syntax
function welcome(){
    console.log("Welcome to javascript");
}
welcome(); // function callback

// function keyword
// function name
// () - parameter receive the outside data
// console.log - function body
// welcome() - function callback arguments send the outside data to the function

// Function parameter with argument **
let name = "Lakshmi Narasimhan"

function greet(username){ // optional
    console.log(`Welcome back ${username}`);
}
greet(name);

// Adding two numbers with parameter and arguments

let n1 = 10;
let n2 = 10;

let n3 = 35;
let n4 = 25;

// Function reusuablility
function addNumbers(num1, num2){
    console.log(num1 + num2);
}
addNumbers(n1, n2) // arguments
addNumbers(n3, n4); // callback for performing a function reusuablility

// Function body with return statement
function greetUser(){
    return "Hello user welcome";
}
console.log(greetUser());

// Multiple functions - one function depends on another function

function parent(){
    console.log("Parent function executed");  
    child();  
}

function child(){
    console.log("Child function executed");    
}
parent();

// Nested functions - **

function main(){
    console.log("Main function executed");

    function innerFunction(){
        console.log("Inner function executed");        
    }  
    return innerFunction();  
}
main();

// Important interview function problem
// Function currying is a process of a function returns a new function
function multiplyNumbers(n1){
    return function(n2){
        return n1 * n2;  // 10 * 20 = 200
    }
}
console.log(multiplyNumbers(10)(20));