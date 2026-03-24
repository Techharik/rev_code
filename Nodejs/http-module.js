const http = require('http');


const server = http.createServer((req, res) => {
    const url = req.url;

    if (url === '/') {

        res.writeHead(200, {
            'Content-Type': 'text/plain',
        }).end('e');
    } else if (url === '/home') {
        res.writeHead(200, {
            'Content-Type': 'text/plain',
        }).end('home');
    } else {
        res.writeHead(404, {
            'Content-Type': 'text/plain',
        }).end('Page not found');
    }
})

const port = 3232;

server.listen(port, (err) => {
    if (err) throw err;
    console.log('sever started sucessfully')
})