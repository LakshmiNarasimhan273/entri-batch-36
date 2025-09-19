// File System
// Library name - fs
const fs = require("fs");

// Create and Write File
fs.writeFile("report.txt", "Entri Elevate FSD Course Report", (err) => {
    if(err){
        console.log(err);
        return;
    }
    console.log("File written successfully");
});

// Read File
fs.readFile("report.txt", 'utf8', (err, data) => {
    if(err){
        console.log(err);
        return;
    }
    console.log(data);
})