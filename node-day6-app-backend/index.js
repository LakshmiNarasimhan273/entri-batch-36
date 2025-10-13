const express = require("express");
require("dotenv").config();
const dbConnection = require("./config/dbConnection");
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

// use middleware
app.use(express.json());
app.use("/api", userRoutes);
app.use("/auth", authRoutes);

dbConnection();
app.listen(process.env.port, () => {
    console.log(`Server running on http://localhost:${process.env.port}`);
})