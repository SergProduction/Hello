var http = require('http');
var url = require('url');
var route = require('./route')




var server = new http.Server(function(req, res){

  console.log(req.method, req.url);
  var urlParsed = url.parse(req.url, true);
  if (urlParsed.query.uri == 'ya.ru') {
    res.writeHead(200, "Успех"{"Content-Type": "text/plain"});
    res.end("Hello");
  }else{
    res.statusCode = 404;
    res.end("Page not faund");
  }
  console.log(urlParsed);

})

server.listen(3000, 'localhost');