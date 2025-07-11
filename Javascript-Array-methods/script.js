// Array methods

// 1) forEach is a advance process of for loop
const appproducts = ['watch', 'laptop', 'mobile'];

// for loop syntax for processing array
// for(let i = 0; i < products.length; i++){
//     console.log(products[i]);    
// }

// forEach syntax
appproducts.forEach(data => {
    console.log(data);    
});

// 2) map function ** important for react development
// map function takes an original and process our conditions
// and return the otuput in new array
const price = [100, 200, 300];
const totalPrice = price.map(gst => gst * 1.20);
// 100 * 1.20
// 200 * 1.20
// 300 * 1.20
// [120, 240, 360]
console.log(totalPrice);

// 3) filter function ** important for both react and node development
// filter function filter the overall data based on our requirements
const products = [
    {id: 1, name: 'laptop', price: 5000, category: "electronics"},
    {id: 2, name: 'notebook', price: 80, category: "stationary"},
    {id: 3, name: 'mobile', price: 2000, category: "electronics"}
];
const filteredProducts = products.filter(data => {
    return data.category === "electronics";
});
console.log(filteredProducts);

// find ** search functionality
// it implements the search functionality into our original array
const searchProducts = products.find(product => {
    return product.name === "mobile";
});
console.log(searchProducts);

// reduce function * important for interview
// adding the array elements by reduce function, it carries
// 2 parameter variables, currentValue, nextValue
const cart = [500, 1000, 3500, 4000];
// 500 + 1000 = 1500
// 1500 + 3500 = 5000
const total = cart.reduce((a, b) => {
    return a + b;
});
console.log(total);

// includes function ** node development for security
// it checks the data is presented in the array or not, if it's present 
// it will return as true or else false
const loggedUser = ['admin', 'super-admin', 'user'];
console.log(loggedUser.includes('admins'));

// sort * important for interview
// convert our un-ordered array in sequence order
const nums = [1, 3, 2];
nums.sort((a, b) => {
    return a - b;
});
console.log(nums);
// a = 1 b = 3 -> 1 3
// a = 3 b = 2 -> 2 3
// [1, 2, 3];

// push & pop , shift & unshift
const numbers = [1, 2, 3];
numbers.push(4); // adding element in last place of the array
console.log("Push method", numbers);
numbers.unshift(0); // adding element in starting place of the array
console.log("Unshift method", numbers);
numbers.pop(); // removing element from last
console.log("Pop method", numbers);
numbers.shift(); // removing element from starting
console.log("Shift method", numbers);

// Real-time implementation for filter method in api
fetch("https://fakestoreapi.com/products").then(res => {

    if(!res.ok){
        throw new Error("API Fetching error");
    }
    return res.json();
}).then(data => {
    console.log("Original API Data", data);
    const filteredProducts = data.filter(product => {
        // return product.category === "women's clothing";
        // return product.price > 500;
        return product.rating.rate > 4;
    })
    console.log("Filtered data", filteredProducts);  
    
}).catch(err => {
    console.error(err);    
})