var http = require('http');
var service = require('./app');

http.createServer(service.handleRequest).listen(8000);