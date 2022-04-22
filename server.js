var http = require('http');
var fs = require('fs');

onRequest = (req, res) =>{
    res.writeHead(200, {'Content-Type': 'text/html'});
    //res.write('<h2>hello Test!!</h2>');
    fs.readFile('./index.html', null, (error, data)=>{
        if(error){
            res.writeHead(404);
            res.write('File Not Found!');
        }else{
            res.write(data);
        }
        res.end();
    });
}

http.createServer(onRequest).listen(8000);
