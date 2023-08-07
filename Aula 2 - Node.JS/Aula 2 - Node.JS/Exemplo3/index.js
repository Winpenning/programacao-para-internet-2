// npm install express
const express = require("express");
const app = express();
const port = 777;

app.get('/', (req, res) => {
    res.send("Hello the Great!");
});

app.get('/paulo', (req, res) => {
    res.send("I am Paulo!");
});



app.listen(port, () => {
    console.log("Hello world!");
});