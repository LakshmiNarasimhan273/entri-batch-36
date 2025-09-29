const userModal = require("../models/userModel");

// User Register API
const registerAPI = (req, res) => {
    const {username, password, role} = req.body;

    const existingUser = userModal.find(existingUsername => existingUsername.username === username);
    if(existingUser){
        return res.status(400).json({message: "Username already registered"});
    };
    const newUser = {
        id: userModal.length ? userModal[userModal.length - 1].id + 1 : 1,
        username,
        password,
        role
    };
    userModal.push(newUser);
    res.status(201).json({message: "User registration successful"});
};

const loginAPI = (req, res) => {
    const {username, password} = req.body;

    const user = userModal.find(savedUser => savedUser.username === username && savedUser.password === password);

    if(!user){
        return res.status(401).json({message: "Unauthorized: Invalid credentials"});
    }

    res.status(200).json({message: "Login Successful", role: user.role, username: user.username});
}

module.exports = {registerAPI, loginAPI};