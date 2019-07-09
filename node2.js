var http = require('http');http.createServer(function (req, res) {
 res.write('Welcome to Uki. I am SK Santhose');
 res.end();
}).listen(8080);
