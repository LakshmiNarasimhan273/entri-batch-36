const productModel = require("../model/Product");

// GET ALL API
const getallProducts = (req, res) => {
    res.status(200).json(productModel);
}

// GET BY ID API
const getproductbyId = (req, res) => {
    const id = parseInt(req.params.id); // 2

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

// UPDATE API
const updateProduct = (req, res) => {
    const id = parseInt(req.params.id);
    const {title, price} = req.body;

    const product = productModel.find(existingProduct => existingProduct.id === id);

    if(product){
        // Update logic
        // select our product and a logic defines which key is going to update
        // either title or price - if i update title only the price key data
        // should not be affected
        product.title = title ?? product.title; // || - ??
        product.price = price ?? product.price;
        res.status(200).json(product);
    }else{
        res.status(404).json({message: "Product Not Found"});
    }
}

// DELETE API
const deleteProduct = (req, res) => {
    const id = parseInt(req.params.id);
    const product = productModel.findIndex(existingProduct => existingProduct.id === id);

    if(product !== -1){
        const deletedProduct = productModel.splice(product, 1);
        res.status(200).json({message: "Product deleted"});
    } else {
         res.status(404).json({message: "Product Not Found"});
    }
}

module.exports = {getallProducts, getproductbyId, createProduct, updateProduct, deleteProduct};