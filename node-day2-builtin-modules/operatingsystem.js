// Operating System 
// Library name - os
const os = require("os");

// Platform
console.log("Platform:",os.platform());
console.log("Operating system Type:", os.type());
console.log("Release version:", os.release());
console.log("OS Version:", os.version());

// Architecture
console.log("Architecture:", os.arch());

// Total System Memory
console.log("Total memory:", (os.totalmem() / 1024 ** 3).toFixed(2));

// Free system memory (current)
console.log("Free memory (current):", (os.freemem() / 1024 ** 3).toFixed(2));

// Display uptime
console.log("Display uptime:", (os.uptime() / 3600).toFixed(2));

// CPU Information
console.log("CPU info:", os.cpus());

// Network interface informations
console.log("Network information:", os.networkInterfaces());