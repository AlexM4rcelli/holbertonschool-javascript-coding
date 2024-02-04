const fs = require('fs');

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(error);
        return;
      }
      const students = data.split('\n').slice(1, -1);
      const subjects = {};
      students.forEach((row) => {
        const studentData = row.replace(/[\r\s]+/g, '').split(',');
        if (!subjects[studentData[3]]) subjects[studentData[3]] = [];
        subjects[studentData[3]].push(studentData[0]);
      });
      resolve(subjects);
    });
  });
}

module.exports = readDatabase;
