const express = require('express');
const AppController = require('../controllers/AppController.js');
const StudentsController = require('../controllers/StudentsController.js');

const router = express.Router();

router.get('/', AppController.getHomePage);
router.get('/students', (req, res) => 
  StudentsController.getAllStudents(req, res, process.argv[2])
);
router.get('/students/:major', (req,res) => 
  StudentsController.getAllStudentsByMajor(req, res, process.argv[2])
);

module.exports = router;
