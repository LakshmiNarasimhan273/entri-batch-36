const express = require("express");
const router = express.Router();

router.post("/login", (req, res) => {
    // Login logic
    res.send("Login Successfull");
});

router.post("/register", (req, res) => {
    // Register logic
    res.send("Registeration sucessfully done");
})

module.exports = router;