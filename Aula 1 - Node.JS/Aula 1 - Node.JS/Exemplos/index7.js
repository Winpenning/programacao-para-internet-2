const http = require("http");
const url = require("url");
const port = 777;

const server = http.createServer((req, res) => {
    var urlInfo = url.parse(req.url, true);
    const valor1 = parseFloat(urlInfo.query.valor1);
    const valor2 = parseFloat(urlInfo.query.valor2);

    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    if (!valor1) {
        res.end(
            "<h1>Soma de dois valores<h1>" +
            "<form method='GET'>" +
            "<div>" +
            "<label for='valor1'>Digite o valor 1:</label>" +
            "<input type='text' name='valor1'/>" +
            "</div>" +
            "<div>" +
            "<label for='valor2'>Digite o valor 2:</label>" +
            "<input type='text' name='valor2'/>" +
            "</div>" +
            "<input type='submit' value='Somar'>" +
            "</form>"
        );
        
    } else {
        const soma = valor1 + valor2;
        res.end(
            "<h1>Soma de dois valores</h1>" +
            "<form method='GET'>" +
            "<div>" +
            "<label for='valor1'>Digite o valor 1:</label>" +
            "<input type='text' name='valor1'/>" +
            "</div>" +
            "<div>" +
            "<label for='valor2'>Digite o valor 2:</label>" +
            "<input type='text' name='valor2'/>" +
            "</div>" +
            "<input type='submit' value='Somar'>" +
            "</form>" +
            "<h2>Resultado da soma: " + soma + "</h2>"
        )
    }
});

server.listen(port, () => {
    console.log("Server listenning on port: " + port);
})