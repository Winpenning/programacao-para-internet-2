// npm install express
// npm install --save-dev-nodemon
const express = require("express");
const { userInfo } = require("os");
const app = express();
const port = 777;
const path = require("path");

const basePath = path.join(__dirname, "templates");

//Middleware
var auth_check = function (req, res, next) {
    req.status = true;
    if (req.status) {
        console.log("Usuário autenticado");
        next()
    }
    else {
        console.log("acesso negado")
    }
}

app.use(auth_check);




app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`);
});

app.listen(port);