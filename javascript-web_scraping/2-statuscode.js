#!/usr/bin/node

const request = require('request');
const URL = process.argv[2];

request.get(URL, (err, res) => {
  if (err) {
    throw err;
  }

  if (res && res.statusCode) {
    console.log(`code: ${res.statusCode}`);
  } else {
    console.error('Unable to retrieve status code.');
  }
});
