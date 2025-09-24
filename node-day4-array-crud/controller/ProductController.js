const productModel = require("../model/Product");

// GET ALL API
const getallProducts = (req, res) => {
    res.status(200).json(productModel);
}

// GET BY ID API
const getproductbyId = (req, res) => {
    const id = parseInt(req.params.id);

    const product = productModel.find(existingProduct => existingProduct.id === id);

    if(product){
        res.status(200).json(product);
    } else {
        res.status(404).json({message: "Product Not Found"});
    }

}

// POST API
const createProduct = (req, res) => {
    const {title, price} = req.body;

    if(!title || !price){
        return res.status(400).json({message: "Both fields are required"});
    }

    const newProduct = {
        // if product model has some length value ? - id should be auto incremented
        // else : - assign new product id as 1
        id: productModel.length ? productModel[productModel.length - 1].id + 1 : 1,
        title,
        price
    }
    productModel.push(newProduct);
    res.status(201).json(newProduct);
}

module.exports = {getallProducts, getproductbyId, createProduct};