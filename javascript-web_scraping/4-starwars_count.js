#!/usr/bin/node

const request = require('request');
const url = process.argv[2];

request.get(url, (err, res) => {
  if (err) {
    console.error(err);
  } else {
    try {
      const movies = JSON.parse(res.body).results;
      let count = movies.reduce((acc, movie) => {
        for (const character of movie.characters) {
          if (character.includes('18')) {
            acc++;
            break;
          }
        }
        return acc;
      }, 0);
      console.log(count);
    } catch (parseError) {
      console.error('Error parsing JSON:', parseError);
    }
  }
});
