/*
 * If the file is not created it will show File Not Found error in renderHtml function and
 * if the route is not defined it will show Sorry! This route is not defined! error as it will go to default case.
 */
var url = require('url');
var fs = require('fs');

module.exports = {
    handleRequest: onRequest = (req, res) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        var path = url.parse(req.url).pathname;
        switch(path){
            case '/':
                renderHtml('./home.html', res);
                break;
            case '/signin':
                renderHtml('./signin.html', res);
                break;
            case '/signup':
                renderHtml('./signup.html', res);
                break;
            default:
                res.writeHead(404);
                res.write('Sorry! This route is not defined!');
                res.end();
        }
    }
}


renderHtml = (path, res) =>{
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile(path, null, (error, data)=>{
        if(error){
            res.writeHead(404);
            res.write('File Not Found!');
        }else{
            res.write(data);
        }
        res.end();
    });
}

module.exports.renderHtml = this.renderHtml;