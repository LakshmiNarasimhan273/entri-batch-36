// Remaining array methods
// 1) Slice - Process our given array by shallow copy first
const products = ['laptop', 'mobile', 'desktop', 'chair'];
console.log("Original given array",products);
const removedProducts = products.slice(0, 2);
console.log("Shallow copy of our array with removed products",removedProducts);

// Splice method ** Important for interview
// super-admin
// admin
// user
const users = ['admin', 'user'];
users.splice(0, 0, 'super-admin');
console.log(users);

// Spread operator
// ... ...
const a = [1, 2, 3];
const b = [4, 5, 6];
console.log([...a, ...b]);

// merging 2 different objects
const userDetails = {
    name: "Narasimhan",
    role: "Mentor",
    email: "narasimhan.com"
}

const updatedUser = {
    role: "Developer",
    email: "narasimhan@outlook.com",
    location: "Chennai"
}

console.log({...userDetails, ...updatedUser});

// Rest operator
// ...
function createIssue(username, role, ...issue){
    console.log(`Employee name:- ${username}`);
    console.log(`Role:- ${role}`);
    console.log(`Issues details:- ${issue}`);  
}
createIssue("Narasimhan", "Mentor", "Network not accessible", "Could'nt able to login", "All websites are blocked by admin side");

// Real-time example for Rest operator

function bill(customerName, customerMobile, ...products){
    console.log("Customer name", customerName);
    console.log("Mobile number", customerMobile);
    console.log("Purchased products", products);
    
}

bill("Narasimhan", "7010036699", "Fruits", "Groceries", "Notebooks", "Pencil", "Chart");
console.log("**DSA INTERVIEW PROBLEM ->");

// Data Structure problem
// Very important for MCN level interviews
// Problem - Adding two arrays and show the final output
// array1 = [3, 5, 2] array2 = [7, 2, 1]
// Final output : 20
// Use case - First merge 2 arrays, then process with array methods
// to add all the array values

const array1 = [3, 5, 2];
const array2 = [7, 2, 1];

function addingArrays(array1, array2){
    // Structure 1
    let mergedArray = [...array1, ...array2]; // spread operator
    // console.log(mergedArray);
    
    // Structure 2
    // [3, 5, 2, 7, 2, 1];
    let addedValues = mergedArray.reduce((a, b) => {
        return a + b;
    });
    // Structure 3
    return addedValues;
}
console.log(addingArrays(array1, array2));
