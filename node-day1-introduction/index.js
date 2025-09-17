// import express from "express";
const express = require("express");
const app = express();

// PORT Variable
let port = 8081;

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
})