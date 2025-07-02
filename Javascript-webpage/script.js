let productA = 0;
let productB = 0;
let productC = 0;
let total = 0;

function addToCart(product) {
    if (product === 'watch') {
        productA += 1;
        total += 500
        document.getElementById("productA").innerText = "Watch: " + productA;
    }
    else if (product === 'phone') {
        productB += 1;
        total += 30000;
        document.getElementById("productB").innerText = "Phone: " + productB;
    }
    else if (product === 'laptop') {
        productC += 1;
        total += 80000;
        document.getElementById("productC").innerText = "Laptop: " + productC;
    }
    document.getElementById("totalPrice").innerText = total;
}