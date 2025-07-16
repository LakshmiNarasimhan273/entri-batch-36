document.addEventListener("DOMContentLoaded", function(){
    // DOM elements to select our id
    const productContainer = document.getElementById("productContainer");

    fetch("https://fakestoreapi.com/products").then(res => res.json())
    .then(data => {
        data.forEach(product => {
            const div = document.createElement("div");
            div.className = 'col';

            const card = document.createElement("div");
            card.className = "card shadow-sm h-100";

            const img = document.createElement("img");
            img.src = product.image;
            img.className = "card-img-top";

            const body = document.createElement("div")
            body.className = "card-body";

            const title = document.createElement("h5");
            title.className = "card-title fw-bold text-truncate";
            title.innerText = product.title;

            const price = document.createElement("h6");
            price.className = "text-warning fw-bold mb-2"
            price.innerText = product.price;

            const button = document.createElement("button");
            button.className = "btn btn-sm btn-primary w-100";
            button.innerText = "Add to cart";

            // body class append
            body.appendChild(title);
            body.appendChild(price);
            body.appendChild(button);

            // image append to card class
            card.appendChild(img);
            card.appendChild(body);

            div.appendChild(card);

            productContainer.appendChild(div);
        })
    }).catch(err => console.error(err)
    )
})