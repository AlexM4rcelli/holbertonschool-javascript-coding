const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!\n');
});

const port = 1245;
app.listen(port, () => {
  console.log(`Express server is running and listening on port ${port}`);
});

module.exports = app;
