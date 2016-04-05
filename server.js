var http = require('http');

var server = new http.Server();

server.listen(3000, 'localhost');

server.on('request', function(req, res){
  res.end("Hello");
})