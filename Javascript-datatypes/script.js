// Data-types
// String, Number, Boolean, undefined, Object
// Array, Big Int, null

// String - group of characters
var name = "Narasimhan";
console.log(typeof name);

// Number
var age = 18;
console.log(typeof age);

// Boolean -> true or false
var eligiblity = false;
console.log(typeof eligiblity);

// Undefined
var salary = undefined;
console.log(typeof salary);

// Object **
var details = {
    // key value pair -> Important *
    name: "Narasimhan",
    age: 28,
    role: "Developer"
};
console.log(typeof details);

// Arrays
var fruits = ['orange', 'apple', 'jackfruit', 25, false, undefined];
console.log(fruits);

// Bigint
var number = 1341235n; // n numbers of value
console.log(typeof number);

// null
var hike = null;
console.log(typeof hike);
// Difference between null and undefined;
// undefined - it's create a variable memory in our system, but no values
// null - 0 

// Advanced object creation - products data (ecommerce)

let products = {
    productImage: "watch.jpeg", // string
    productTitle: "Sports watch with water resistant", //string
    productPrice: 5602, // number
    productDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishi", //string
    review: { // object
        rating: 4.7,
        count: 543
    },
    productColors: ['orange', 'black', 'navy-blue', 'green'], // array
    productStock: 354, // number
    cod: false, //boolean
    orderTracking: undefined // undefined
}
console.log(products);
console.log(products.productColors);

// Interview based object creation - user details, 
let user = {
    username: "Narasimhan",
    email: "narasimhan@gmail.com",
    mobileNumber: 7010036699,
    qualifications: ['bca', 'mca'],
    role: "Developer",
    experience: {
        company1: "ABC",
        company2: "DEF",
        company3: "GHI"
    },
    totalExperience: 4,
    location: 'chennai',
    availableDate: {
        lastWorkingday: "14th june 2025",
        interviewAvail: "20th june 2025",
        doj: "25th june 2025"
    },
    salary: {
        currentLpa: 100000,
        expectationLpa: 200000
    }
}
console.log(user);
