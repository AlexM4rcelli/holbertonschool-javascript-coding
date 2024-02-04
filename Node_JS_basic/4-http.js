// Importing the http module
const http = require('http');

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Holberton School!\n');
});

const port = 1245;
app.listen(port, () => {
  console.log(`Server is running and listening on port ${port}`);
});

module.exports = app;
