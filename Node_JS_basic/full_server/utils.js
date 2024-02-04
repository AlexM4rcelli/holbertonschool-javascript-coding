const fs = require('fs');

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) reject(error);
      const students = data.split('\n').slice(1, data.length - 1);
      const subjects = {};
      students.pop();
      students.map(row => row.replace(/[\r\s]+/g, '')).forEach((student) => {
        const studentData = student.split(',');
        if (!subjects[studentData[3]]) subjects[studentData[3]] = [];
        subjects[studentData[3]].push(studentData[0]);
      });
      resolve(subjects);
    });
  });
}

module.exports = readDatabase;