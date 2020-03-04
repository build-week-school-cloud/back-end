const express = require('express');

const Volunteer = require('./volunteer-model');

const router = express.Router();

router.get('/',(req, res) => {
  Volunteer.find()
  .then(cards => {
    res.status(200).json(cards);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get cards' });
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  Volunteer.findById(id)
  .then(card => {
    if (card) {
      res.json(card);
    } else {
      res.status(404).json({ message: 'Could not find card with given id.' })
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get card' });
  });
});


router.post('/', availableVolunteer, (req, res) => {
  const cardData = req.body;
  Volunteer.add(cardData)
  .then(card => {
    res.status(201).json(card);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new task' });
  });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Volunteer.findById(id)
  .then(card => {
    if (card) {
      Volunteer.update(changes, id)
      .then(updatedTask => {
        res.json(updatedTask);
      });
    } else {
      res.status(404).json({ message: 'Could not find Task with given id' });
    }
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to update Task' });
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  Volunteer.remove(id)
  .then(deleted => {
    if (deleted) {
      res.json({ removed: deleted });
    } else {
      res.status(404).json({ message: 'Could not find task with given id' });
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to delete task' });
  });
});


function availableVolunteer (req, res, next) {
  if (req.body.name && req.body.location && req.body.subject && req.body.time){
    next() 
  } else {
    res.status(400).json({message: "no card created"})
  }
}

module.exports = router;