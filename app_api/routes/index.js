var express = require('express');
var router = express.Router();
var ctrlVehicle = require('../controllers/toll.js');



router.get('/', ctrlVehicle.findAll);

router.get('/:vehicleid', ctrlVehicle.findOne);

router.post('/', ctrlVehicle.createOne);

router.put('/:vehicleid',ctrlVehicle.editOne);

router.delete('/:vehicleid', ctrlVehicle.removeOne);


module.exports = router;