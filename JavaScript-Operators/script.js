// Arithmetic operators
// +, -, *, /, **

const a = 10;
const b = 3;

console.log("Addition", a + b);
console.log("Subtraction", a - b);
console.log("Multiplication", a * b);
console.log("Division", a / b);
console.log("Exponentiation", a ** b);


// Assignment operator
//  =, +=, =+ ** Important for interview
// += , pre assignment
let x = 5;
x -= 10;
console.log("pre assignment", x);

// =+ , post assignment
x =- 6;
console.log("post assignment", x);

// Comparison operator
// > - greater than, < - less than
// >= - greather or equal to
// <= - less than or equal to
// ** Very important for interviews
// == - equal to, it checks only the value is
// equal or not
// === - triple equal to, it checks the value and 
// data-types is equal or not

let i = 10; // number
let j = "10"; // string
console.log("I is greater than J", i > j); // false
console.log("I is smaller than J", i < j); // false

console.log("I is greater than or equal to J", i >= j); // true

console.log("Double equal to", i == j); // true
console.log("Triple equal to", i === j); // false

// Ternary operator ** Very important for interviews
// ? - true block : - false block
let login = false;
login 
? console.log("Access granted") 
: console.log("Access declined");

// Expression - String concatenation
// , + ``(backtricks)
let username = "Narasimhan";
console.log("Hello welcome", username); // comma method
console.log("Hello welcome " + username); // plus sign
console.log(`Hello welcome ${username}`); // backtricks


// Interview questions for ternary operator
// Problem 1 - Vote eligiblity functionality
// Problem 2 - Authorization for admin and user

// Problem 1
let age = 17;
age >= 18 ? console.log("Eligible for vote") : console.log("Not eligible for vote");


// Problem 2
// authentication & authorization
// authentication - checking the credentials
// authorization - access
let user = {
    username: "Narasimhan",
    userRole: "user"
};

user.userRole === "admin" ? 
console.log("Access granted") : 
console.log("Access declined");