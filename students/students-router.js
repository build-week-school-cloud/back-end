const express = require('express');

const Students = require('./students-model');

const router = express.Router();

router.get('/', (req, res) => {
  Students.find()
  .then(students => {
    res.json(students);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get students' });
  });
});

module.exports = router;