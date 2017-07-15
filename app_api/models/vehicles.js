var mongoose = require('mongoose');
var VehicleSchema = new mongoose.Schema({
	name : {type: String, required: true},
	address: {type: String, required: true},
	phone_number : {type: String, required: true},
	email: {type: String, required: true},
	car_plates:{type: String, required: true},
	car_weight:{type: String, required: true},
	car_model: {type: String, required: true},
	account :{type: Number, default: '10'}

});


module.exports  = mongoose.model('Vehicle', VehicleSchema);
