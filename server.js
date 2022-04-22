var http = require('http');
var greet = require('./greet');

onRequest = (req, res) =>{
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write(greet.welcomeText);
    res.end();
}

http.createServer(onRequest).listen(8000);
