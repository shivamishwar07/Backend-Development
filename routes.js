const http = require('http');
const fs = require('fs');
const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        fs.readFile('message.txt', { encoding: 'utf8' }, (err, data) => {
            if (err) {
                console.log(err);
            }
            console.log("Data from file", data);

            res.write('<html>');
            res.write('<head><title>My first page</title></head>');
            res.write('<body>');
            res.write(`<p>${data}</p>`);
            res.write('<form action="/message" method="post"> <input type="text" name="message"> <button type="submit">Send</button></form>');
            res.write('</body>');
            res.write('</head>');
            return res.end();
        })
    } 
    if (url == '/message' && method == 'POST') {
        const body = [];
        req.on('data', (chunks) => {
            console.log(chunks);
            body.push(chunks);
        });

        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const message = parsedBody.split('=')[1];
            fs.writeFileSync('message.txt', message);
            res.statusCode = 302;
            res.setHeader('location', '/');
            return res.end();
        });
    }else{
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My first page</title></head>');
    res.write('<body><h1>Welcome node js server</h1></body>');
    res.write('</head>');
    res.end();
    }
}

module.exports = requestHandler;