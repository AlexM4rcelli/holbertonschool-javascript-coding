const fs = require('fs');
const { resolve } = require('path');

const countStudents = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) reject(new Error('Cannot load the database'));
      const students = data.split('\n').slice(1, data.length - 1);
      const subjects = {};
      const messages = [];
      students.pop();
      students.map(row => row.replace(/[\r\s]+/g, '')).forEach((student) => {
        const studentData = student.split(',');
        if (!subjects[studentData[3]]) subjects[studentData[3]] = [];
        subjects[studentData[3]].push(studentData[0]);
      });
      messages.push(`Number of students: ${students.length}`);
      for (const key of Object.keys(subjects)) {
        messages.push(`Number of students in ${key}: ${subjects[key].length}. List: ${
          subjects[key].join(', ')
        }`);
      }
      
      messages.forEach((message) => console.log(message));
      resolve(messages);
    });
  });
};
module.exports = countStudents;
