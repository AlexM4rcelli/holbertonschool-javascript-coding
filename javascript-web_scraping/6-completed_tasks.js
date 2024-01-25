#!/usr/bin/node
const request = require('request');
const url = process.argv[2];

request.get(url, (error, res) => {
  if (error) {
    console.error(error);
  }
  const jsonData = JSON.parse(res.body);
  const tasksCompleted = jsonData.reduce((acc, { userId, completed }) => {
    if (completed) {
      acc[userId] = (acc[userId] || 0) + 1;
    }
    return acc;
  }, {});

  console.log(tasksCompleted);
});
