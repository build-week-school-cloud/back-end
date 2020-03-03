const express = require('express');

const Volunteers = require('./volunteers-model');

const router = express.Router();

router.get('/', (req, res) => {
  Volunteers.find()
  .then(volunteers => {
    res.json(volunteers);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get volunteers' });
  });
});

module.exports = router;