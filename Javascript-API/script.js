// Javascript API

// https://fakestoreapi.com/products
// Promises then catch
fetch("https://fakestoreapi.com/products?limit=5").then(res => {
    // API STATUS MESSAGES
    // ok - success | pending | error (or) err - failed
    if(!res.ok){
        throw new Error("API Fetching failed");
    }
    return res.json();
}).then(data => {
    console.log(data);
}).catch(err => {
    console.error(err);    
})
// fetch - learnt about how to make a API call
// Promises - then & catch block, api data carrying place for another places