const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;
const dataBase = process.argv[2];

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const msg = 'This is the list of our students\n';
  countStudents(dataBase)
  .then((data) => {
    res.send(`${msg}${data.join('\n')}`);
  })
  .catch((error) => {
    res.send(`${msg}${error.message}`)
  });
});

const server = app.listen(port, () => {});

module.exports = server;
