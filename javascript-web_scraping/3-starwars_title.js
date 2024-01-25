#!/usr/bin/node
const request = require('request');
const id = process.argv[2];
const url = `https://swapi-api.hbtn.io/api/films/${id}`;

request.get(url, (err, res) => {
  if (err) {
    console.error(err);
  }
  else {
    const jsonData = JSON.parse(res.body);
    console.log(jsonData.title)
  }
});
