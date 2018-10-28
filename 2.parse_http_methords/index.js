 // content of index.js
// parsing http requests.

const http = require('http');
const fs = require('fs');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    
    if(req.url === '/home'){
        fs.readFile('./views/home.html', null, function(err, content){
            if(err){
                res.writeHead(404);
                res.write('Ops! Something went wrong.');
                res.end()
            } else {
                res.writeHead(200,{'Content-Type': 'text/html'})
                res.write(content);
                res.end();
            }
        });
    } else {
        res.writeHead(400)
        res.write('Ops! invalid url.');
        res.end()
    }
    console.log(req.url);
    
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});