// file system
const fs = require("fs");

fs.readFile("index2.txt","utf8",(err, data) => {
    console.log(data);
});