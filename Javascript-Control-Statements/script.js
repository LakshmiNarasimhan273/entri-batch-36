// Control statements
// 1) Conditions
// 2) Loopings

// Conditions - * If-Else *Switch case
// If-Else
let age = 13;
// age >= 18 ? console.log() : console.log();
// if(age >= 18){
//     console.log("Eligible");    
// }else{
//     console.log("Not eligible");    
// }

if (age > 18) {
    console.log("Eligible");
}
else if (age === 18) {
    console.log("Eligible for vote");
}
else {
    console.log("Not eligible");
}

// Interview problem - Nested condition
// Student grading system ** Very important for interviews
// if(total > 480){
//     console.log("A Grade");    
// }
// else if(total > 450){
//     console.log("B Grade");    
// }
// else if(total > 400){
//     console.log("C Grade");    
// }
// else if(total > 350){
//     console.log("D Grade");    
// }
// else{
//     console.log("Fail");    
// }
// AND Operator checks the both conditions are true
// OR(||) Operator checks any one of the conditions are true
let total = 500; // 500
if (total > 350) { // AND(&&) Operator
    if (total <= 500) {
        if (total > 480) {
            console.log("A Grade");
        }
        else if (total > 450) {
            console.log("B Grade");
        }
        else if (total > 400) {
            console.log("C Grade");
        } else {
            console.log("D Grade");
        }
    } else {
        console.log("Invalid total");
    }
} else {
    console.log("Fail");
}

// Switch case
// Day finder
let day = 5;
switch(day){  //If statement
    case 1:
        console.log("Monday");
        break;
    
    case 2: // else if
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;
    
    default: // else
        console.log("Invalid day format");       
        
}

// Looping statements
// for loop, while loop, do-while loop
// for loop syntax

// for loop 3 parameters
// 1 - intial value
// 2 - condition
// 3 - increment
for(let i = 1; i <= 50; i++){
    console.log(i, "times executed");
}

// while loop
let j = 0; // intial value
while(j <= 5){ // condition
    console.log(j, "While loop executed");
    j++; // increment
}

// do-while loop
let k = 0;
do{
    console.log(k, "times executed");
    k++;
}while(k <= 5);

// Interview problem
// Pattern program
// Right angle triangle
let row = 3;
for(let i = 1; i <= row; i++){ // row calculation
    let star = "";
    for(let j = 1; j <= i; j++){ // star printing based on row
        star += "* ";
    }
    console.log(star);    
}

// i = 1
// 1 <= 1
// 2 <= 2
// 3 <= 3