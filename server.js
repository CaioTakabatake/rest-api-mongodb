const http = require('http');

const port = process.env.PORT || 3000;
const routes = {
    '/': 'Rest Api',
    '/books': 'Books page',
    '/authors': 'Authors page',
    '/company': 'Company page',
};

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(routes[req.url]);
});

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
