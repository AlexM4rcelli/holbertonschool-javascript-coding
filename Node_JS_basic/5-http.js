// Importing the http module
const http = require('http');
const countStudents = require('./3-read_file_async');
const dataBase = process.argv[2];

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') res.end('Hello Holberton School!\n');
  else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(dataBase)
      .then((data) => res.end(`${data.join('\n')}`))
      .catch((error) => res.end(error.message));
  } else {
    res.statusCode = 404;
    res.end();
  }
});

const port = 1245;
app.listen(port, () => {
  console.log(`Server is running and listening on port ${port}`);
});

module.exports = app;
