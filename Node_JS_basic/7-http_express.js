const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;
const dataBase = process.argv[2];

app.get('/', (req, res) => {
  res.type('text/plain').send('Hello Holberton School!\n');
});

app.get('/students', async (req, res) => {
  try {
    const data = await countStudents(dataBase);
    res.type('text/plain').send(`This is the list of our students\n${data.join('\n')}`);
  } catch (error) {
    res.type('text/plain').send(error.toString());
  }
});

const server = app.listen(port, () => {
  console.log(`Express server is running and listening on port ${port}`);
});

module.exports = server;
