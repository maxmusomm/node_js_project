const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 8080;
const hostname = 'localhost';

const server = http.createServer((req, res) => {
    let filePath = '.' + req.url;
    if (req.url === '/') { filePath = './index.html'; }
    else { filePath += '.html' }


    fs.readFile(filePath, (err, data) => {
        if (err) {
            return fs.readFile('./404.html', (error, errorData) => {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end(errorData, 'utf-8');
            })
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data, 'utf-8');

    });
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});