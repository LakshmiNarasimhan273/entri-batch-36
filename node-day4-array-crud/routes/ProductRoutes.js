const express = require("express");
const router = express.Router();
const {getallProducts, getproductbyId, createProduct} = require("../controller/ProductController");

// router.get("/products", (req, res) => {
//     res.status(200).json(productModel);
// })

router.get("/products", getallProducts);
router.get("/products/:id", getproductbyId);
router.post("/products", createProduct);

module.exports = router;