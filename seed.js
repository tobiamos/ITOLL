var mongoose = require('mongoose');
var Vehicle = require('./app_api/models/vehicles');
var faker = require('faker');



var seedDB = function() {
    Vehicle.remove({}, function(err, result) {
        if (!err) {
            for (var i = 0; i < 10; i++) {
                Vehicle.create({
                    name: faker.name.findName(),
                    address: faker.address.streetAddress(),
                    phone_number: faker.phone.phoneNumber(),
                    email: faker.internet.email(),
                    car_plates: faker.random.alphaNumeric(10),
                    car_weight: faker.random.number({ "min": 100, "max": 150 }),
                    car_model: faker.random.alphaNumeric(2) + '-' + faker.random.alphaNumeric(4),
                }, function(err, vehicle){
                	if(!err){
                		console.log('Created Vehicles');
                	}
                })
            }

        }
    })


}

module.exports = seedDB;