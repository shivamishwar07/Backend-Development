const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    res.setHeader('Content-Type', 'text/html');
    if (req.url === '/home') {
        res.write('<html><body><h1>Welcome home</h1></body></html>');
    } else if (req.url === '/about') {
        res.write('<html><body><h1>Welcome to About Us page</h1></body></html>');
    } else if (req.url === '/node') {
        res.write('<html><body><h1>Welcome to my Node.js project</h1></body></html>');
    } else {
        res.write('<html><body><h1>404 Not Found</h1></body></html>');
    }

    res.end();
});

server.listen(3000);
