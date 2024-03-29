const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(req, res, dataPath) {
    readDatabase(dataPath)
      .then((data) => {
        let responseMessage = 'This is the list of our students\n';
        for (const k of Object.keys(data)) {
          responseMessage += `Number of students in ${k}: ${data[k].length}. List: ${data[k].join(', ')}\n`;
        }
        res.status(200).send(responseMessage);
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(req, res, dataPath) {
    const { major } = req.params;
    if (major === 'CS' || major === 'SWE') {
      readDatabase(dataPath)
        .then((data) => {
          res.send(`List: ${data[major].join(', ')}`);
        })
        .catch(() => {
          res.status(500).send('Cannot load the database');
        });
    } else {
      res.status(500).send('Major parameter must be CS or SWE');
    }
  }
}

module.exports = StudentsController;
