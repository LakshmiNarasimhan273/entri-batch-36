const express = require("express");
const router = express.Router();

let products = [
    {id: 1, title: "Watch", price: 4500},
    {id: 2, title: "iPhone", price: 120000},
    {id: 3, title: "Laptop", price: 200000}
];

// GET METHOD -> http://localhost:8081/products
// router.get("/products", (req, res) => {
//     res.send("<h1>All products fetched successfully</h1>");
// });

router.get("/products", (req, res) => {
    res.send(products);
})

router.post("/products", (req, res) => {
    res.send("Product Created Successfully");
});

router.put("/product/:id", (req, res) => {
    res.send("Product Updated");
});

router.delete("/product/:id", (req, res) => {
    res.send("Product Deleted");
});

module.exports = router;