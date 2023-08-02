const http = require("http");
const port = 777;

const server = http.createServer((req, res) => {
    // Status do servidor em código 200 'ok'
    res.statusCode = 200;
    // Define o tipo do conteúdo como html
    res.setHeader("Content-Type","text/html");
    res.write("<h1> Olá, este é o meu primeiro " +
        "server HTTP renderizando HTML</h1>");
  
});

server.listen(port, () => {
    console.log(`Server listenning on port ${port}`);
})