// Iteration #1
const mongoose = require('mongoose');
require('../configs/db.config');
const Drone = require('../models/Drone.model');

const dronesList = [
    { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12, image: 'https://assets.newatlas.com/dims4/default/77e123a/2147483647/strip/true/crop/2218x1479+736+203/resize/1200x800!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Fab%2F67%2Ff4168b56456da1b1e105e0f2c4d9%2Fap-234xjq66s2111-hires-jpeg-24bit-rgb.jpg' },
    { name: 'Racer 57', propellers: 4, maxSpeed: 20, image: 'https://lh3.googleusercontent.com/proxy/NNVx0G-OkqSHyZEqvHmoDceNM8Be5FCfueLHuILuvRvTWzK78DtBTOFe5OeruXQml_g2drCTKaK7wHOGdwtS6gi3iFavu50jc2fD-NTIJW4' },
    { name: 'Courier 3000i', propellers: 6, maxSpeed: 18, image: 'https://www.unmannedsystemstechnology.com/wp-content/uploads/2020/07/Skyports-delivery-drone-1024x623.jpg' }
  ];

Drone.create(dronesList)
  .then(drones => {
      drones.forEach(drone => {
        console.log(`Drone ${drone.name} created!`)
        mongoose.connection.close()
      })
  })
  .catch(err => console.error(err));

  