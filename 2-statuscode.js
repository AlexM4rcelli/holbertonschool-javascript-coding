const request = require('request');
const URL = process.argv[2];

request.get(URL, (err, res) => {
  if (err) throw err;
  console.log(`code: ${res.statusCode}`)
});
