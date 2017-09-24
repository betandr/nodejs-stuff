const http = require('http');

const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer((request, response) => {
  if (request.method === 'GET' && request.url === '/status') {
    const { headers, method, url } = request;
    let body = [];

    request.on('error', (err) => {
      console.error(err);

    }).on('data', (chunk) => {
      body.push(chunk);

    }).on('end', () => {
      body = Buffer.concat(body).toString();
      response.statusCode = 200;

      response.setHeader('Content-Type', 'application/json');
      response.setHeader('X-Powered-By', 'unicorns');

      const responseBody = { "status":"OK"};

      response.write(JSON.stringify(responseBody));
      response.end();
    });
  } else {
    response.statusCode = 404;
    response.end();
  };
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
