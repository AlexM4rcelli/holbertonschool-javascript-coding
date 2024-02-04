const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!\n');
});

const port = 1245;
app.listen(port, () => {});

module.exports = app;
