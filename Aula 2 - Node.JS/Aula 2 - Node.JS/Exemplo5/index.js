// npm install express
// npm install --save-dev-nodemon
const express = require("express");
const app = express();
const port = 777;
const path = require("path");

const basePath = path.join(__dirname, "templates");
app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`);
});

app.listen(port);