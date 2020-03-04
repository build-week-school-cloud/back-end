const express = require('express');

const Students = require('./students-model');

const router = express.Router();

router.get('/', (req, res) => {
  Students.find()
  .then(students => {
    res.json(students);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get classes' });
  });
});

// function availableClasses (req, res, next) {
//   if (req.body.name && req.body.location && req.body.subject && req.body.time){
//     next() 
//   } else {
//     res.status(400).json({message: "no classes found"})
//   }
// }

module.exports = router;