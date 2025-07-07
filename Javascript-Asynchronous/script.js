// console.log(1);

// setTimeout(() => {
//     console.log(3);    
// }, 3000);

// console.log(2);

async function fetchData(){
    // Exception handling syntax try & catch
    try{
        const res = await fetch("https://fakestoreapi.com/products")
        if(!res.ok){
           throw new Error("API Fetching Error");
        }
        const products = await res.json();
        // products data shared through arguments
        displayData(products)
    }catch(err){
        console.error(err);        
    }
}

function displayData(products){
    // DOM Elements
    const container = document.getElementById("products-container");
    products.forEach(data => {
        const div = document.createElement('div');
        div.className = "product-card";

        div.innerHTML = `
        <img src="${data.image}" /> 
        <h3>${data.title}</h3>
        <p>${data.price}</p>
        <p>${data.description}</p>
        <button>Buy now</button>
        `
        container.appendChild(div);
    })
}
fetchData();

async function fetchUsers(){
    try{
        const res = await fetch("https://fakestoreapi.com/users");
        if(!res.ok){
            throw new Error("Users api fetching error");
        }
        const users = await res.json();
        displayUsers(users);
    }catch(err){
        console.error(err);        
    }
}

function displayUsers(users){
    const container = document.getElementById("users-container");

    users.forEach(data => {
        const div = document.createElement("div");
        div.className = "user-detail";

        div.innerHTML = `
        <h3>Name:- ${data.name.firstname} ${data.name.lastname}</h3>
        <h4>${data.username} - ${data.email}</h4>
        <p>${data.address.city}</p>
        `

        container.appendChild(div);
    })
}
fetchUsers();