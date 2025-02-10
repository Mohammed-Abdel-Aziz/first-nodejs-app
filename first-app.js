//import fs object as a module
const fs = require("fs");

fs.writeFileSync("hello.txt", "Hello World");
console.log("File created successfully");