var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hola estudiantes de ingenieria en informatica y sistemas!');
}).listen(8080);