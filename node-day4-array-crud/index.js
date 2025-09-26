const express = require("express");
require("dotenv").config();
const productRoutes = require("./routes/ProductRoutes");
const userRoutes = require("./routes/UserRoutes");

const app = express();

app.use(express.json());
app.use(productRoutes);
app.use(userRoutes);

app.listen(process.env.port, () => {
    console.log(`Server running on ${process.env.port}`);
});

// Folder pattern
// config -> model -> controller -> (middleware) -> routes => index.js