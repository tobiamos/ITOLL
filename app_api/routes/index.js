var express = require('express');
var router = express.Router();
var ctrlVehicle = require('../controllers/toll.js');


router.get('/', ctrlVehicle.findAll);


module.exports = router;