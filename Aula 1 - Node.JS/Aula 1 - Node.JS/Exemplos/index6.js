const url = require("url");
const address = "https://www.algumlink.com.br/compro?iptv";

const parsedUrl = new url.URL(address);

console.log(parsedUrl.host)
console.log(parsedUrl.pathname)
console.log(parsedUrl.search)
console.log(parsedUrl.searchParams)
console.log(parsedUrl.searchParams.get('alunos'))