// Importing the http module
const http = require('http');
const countStudents = require('./3-read_file_async');
const dataBase = process.argv[2];

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/') res.end('Hello Holberton School!\n');
  else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(dataBase)
      .then((data) => res.end(`${data.join('\n')}`))
      .catch((error) => res.end(error));
  } else {
    res.end();
  }
});

const port = 1245;
app.listen(port, () => {
  console.log(`Server is running and listening on port ${port}`);
});

module.exports = app;
