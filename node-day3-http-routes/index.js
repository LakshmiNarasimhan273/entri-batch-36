const express = require("express");
const app = express();
require("dotenv").config();

const productRoutes = require("./routes/products");
const userRoutes = require("./routes/users");

app.use(productRoutes);
app.use(userRoutes);

app.listen(process.env.port, () => {
    console.log(`Server running on ${process.env.port}`);
})