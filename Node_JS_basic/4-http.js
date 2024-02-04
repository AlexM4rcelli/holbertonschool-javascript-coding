// Importing the http module
const http = require('http');

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type','text/plain');
  res.status(200).end('Hello Holberton School!');
});

const port = 1245;
app.listen(port, () => {});

module.exports = app;
