// Arrow functions

// Regular function
let name = "Narasimhan"
function welcome(name){ // parameter
    console.log(`Welcome ${name}`);    
}
welcome(name); // arguments

// Arrow function () => 
const welcomeUser = (name) => {
    console.log(`Hi, welcome back ${name} with arrow function`);    
}
welcomeUser(name);

// Simplicity
// More flexible
let offer = "Congratulations! you got 15% offer price";
function showOutput(offer){
    return `You got ${offer}`
}
console.log(showOutput(offer));

// Arrow function
const displayOffer = (offer) => `You got ${offer}`;
console.log(displayOffer(offer));

// Callbacks - a function gets callback from another function with the 
// help of parameter & arguments
function sayHello(name){
    console.log(`Hello, ${name}`);    
}
// sayHello("Narasimhan");
function displayMessage(callback){
    let username = "Narasimhan";
    callback(username);
}
displayMessage(sayHello);

// Interview problem - Arrow function with password validation condition
// using function currying
const loginUser = (username) => {
    return (password) => {
        if(password === "narasimhan@123"){
            return `Welcome ${username}, you're loggedin`
        }else{
            return `Password mismatch`;
        }
    }
}
console.log(loginUser("Lakshmi narasimhan")("narasimhan@123"));
