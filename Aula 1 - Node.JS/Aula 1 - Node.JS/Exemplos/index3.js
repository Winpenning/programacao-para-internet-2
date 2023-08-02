// pede o protocolo http
const http = require("http");
// uma constante recebendo um valor
const port = 777;
// uma constante server que cria um servidor utilizando o protocolo http
// escreve como resposta a esse servidor "Hello http!"
// fecha a resposta para para o loop
const server = http.createServer((req, res) => {
    res.write("Hello http!");
    res.end();
});

// faz a constante server escutar na porta definida na constante port
server.listen(port, () => {
    console.log(`Server listenning at the : ${port} port`);
})