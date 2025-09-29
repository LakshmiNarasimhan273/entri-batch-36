const express = require("express");
const app = express();
require("dotenv").config();
const authRoutes = require("./routes/authRoutes");
const flightRoutes = require("./routes/flightRoutes");
const bookRoutes = require("./routes/bookingRoutes");

app.use(express.json());
app.use(authRoutes);
app.use(flightRoutes);
app.use(bookRoutes);

app.listen(process.env.port, () => {
    console.log(`Server Running on - ${process.env.port}`);
});