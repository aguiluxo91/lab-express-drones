// Iteration #1
const mongoose = require('mongoose');
require('../configs/db.config');
const Drone = require('../models/Drone.model');

const dronesList = [
    { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
    { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
    { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
  ];

Drone.create(dronesList)
  .then(drones => {
      drones.forEach(drone => {
        console.log(`Drone ${drone.name} created!`)
        mongoose.connection.close()
      })
  })
  .catch(err => console.error(err));

  