const http = require('http')
const chalk = require('chalk')
const host = 'localhost'
const port = 8000

const server = http.createServer((req, res) => {
    res.writeHead(200, {'content-type' : 'application/JSON'});
        const resJSON ={
            nombre: 'juan rozo',
            mensaje: 'hola desde el servidor de node.js '
        }
    res.write('el servidor esta bien')
    res.end(JSON.stringify(resJSON));
});

server.listen(port, host, ()=> {
   console.log(chalk.green('servidor funciona en ', host, port))
});