
var fs = require('fs');


function route(req, res, query) {
  var path = query.query.uri;

  fs.readFile('./file.html', 'utf8', function(err, data) {
    if (err) {
      res.statusCode = 404;
      res.end('File not found');
      return;
    }

    res.writeHead(200, {"Content-Type": "text/html"});
    res.end(data);
  });
}

module.exports = route;