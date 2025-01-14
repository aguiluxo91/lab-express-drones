const express = require('express');

// require the Drone model here
const Drone = require('../models/Drone.model');

const router = express.Router();

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
Drone.find()
    .then((drones) => {
      res.render('drones/list', { drones })
    })
    .catch(next)
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render('drones/create-form')
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here

  Drone.create(req.body)
    .then(() => {
      res.redirect('/drones')
    })
    .catch(next)
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const { id } = req.params;

  Drone.findById(id)
    .then((drone) => {
      res.render('drones/update-form', { drone });
    })
    .catch(next);
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const { id } = req.params;
  Drone.findByIdAndUpdate(id, req.body)
    .then(() => {
      res.redirect('/drones');
    })
    .catch(next);
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  const { id } = req.params;
  Drone.findByIdAndRemove(id)
    .then(() => {
      res.redirect('/drones');
    })
    .catch(next);
});

module.exports = router;
