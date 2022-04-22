var http = require('http');
var greet = require('./greet');

onRequest = (req, res) =>{
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write(greet.welcomeText);
    console.log('Current Time stamp @'+greet.getDateTime);
    res.end();
}

http.createServer(onRequest).listen(8000);
