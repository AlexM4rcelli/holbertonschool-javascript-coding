#!/usr/bin/node

const request = require('request');
const fs = require('fs');
const url = process.argv[2];
const filepath = process.argv[3];

request.get(url, (err, res, body) => {
  if (err) {
    console.error(err);
  } else {
    fs.writeFile(filepath, body, 'utf-8', (writeErr) => {
      if (writeErr) {
        console.error('Error writing to the file:', writeErr);
      } else {
        console.log(`File written successfully to ${filepath}`);
      }
    });
  }
});
