const http = require("http");
const port = 777;

const server = http.createServer((req, res) => {
    // Status do servidor em c�digo 200 'ok'
    res.statusCode = 200;
    // Define o tipo do conte�do como html
    res.setHeader("Content-Type","text/html");
    res.write("<h1> Ol�, este � o meu primeiro " +
        "server HTTP renderizando HTML</h1>");
  
});

server.listen(port, () => {
    console.log(`Server listenning on port ${port}`);
})