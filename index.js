const http = require('http');
const path = require('path');
const fs = require('fs');
const server = http.createServer((req, res) => {
    let filePath = path.join(__dirname, 'Public', req.url == '/' ? 'index.html' : req.url);
    console.log(filePath);
    let extName = path.extname(filePath);
    let contentType = 'text/html';
    switch(extName){
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }
    fs.readFile(filePath, (err, content) => {
        if (err){
            if (err.code == 'ENOENT'){
                const notFoundPath = path.join(__dirname, 'Public', '404.html');
                fs.readFile(notFoundPath, (err, content) => {
                    res.writeHead(200, {'Content-Type': 'text/html'});
                    res.end(content, 'utf8');
                });
            }else{
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        }else{
            res.writeHead(200, {'Content-Type': contentType});
            res.end(content, 'utf8');
        }
    });
});
const PORT = process.env.PORT || 5000; //If port already exists in environment then use it
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
