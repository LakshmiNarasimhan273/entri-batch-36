const express = require("express");
require("dotenv").config();
const productRoutes = require("./routes/ProductRoutes");

const app = express();

app.use(express.json());
app.use(productRoutes);

app.listen(process.env.port, () => {
    console.log(`Server running on ${process.env.port}`);
});

// Folder pattern
// config -> model -> controller -> (middleware) -> routes => index.js