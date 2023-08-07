// npm install express
// npm install --save-dev-nodemon
const express = require("express");
const { userInfo } = require("os");
const app = express();
const port = 777;
const path = require("path");

const basePath = path.join(__dirname, "templates");

//Middleware
app.use(
    express.urlencoded({
        extended: true,
    })
)
app.use(express.json);
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
app.get('/usuario/adicionar', (req, res) => {
    res.sendFile(`${basePath}/usuarioform.html`)
});
app.post('/usuario/salvar', (req, res) => {
    console.log(req.body);
    const nome = req.body.nome;
    const idade = req.body.idade;
    console.log(nome);
    console.log(idade);
})

app.get('/usuario/:id', (req, res) =>
{
    const id = req.params.id;
    res.sendFile(`${basePath}/usuario.html`);
    console.log(id); 
});



app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`);
});

app.listen(port);