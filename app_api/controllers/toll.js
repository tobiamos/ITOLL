//required modules for api server side code
var mongoose = require('mongoose');
var Vehicle  = require('../models/vehicles');


//function to send json response
var sendJsonResponse= function (res, status ,content){
	res.json(content);
	res.status(status);
}

//controller method to find all vehicles returns an array of vehicle objects
module.exports.findAll = function(req,res){

	Vehicle.find({},function(err, vehicle){
		if(!err){
			sendJsonResponse(res,200,vehicle);
		}
	})
}

//controller method to find one vehicle accepets vehicle id as argument and returs a single vehicle instance of objects

module.exports.findOne = function(req,res,){
	var vehicleid = req.params.vehicleid;
	Vehicle.findById(vehicleid, function(err, vehicle){
		if(!err){
			sendJsonResponse(res,200, vehicle);
		}
	})
}
//controller method to create a vehicle
module.exports.createOne = function(req,res){
	var vehicleData = req.body.vehicle;
	Vehicle.create(vehicleData, function(err,vehicle){
		if(!err){
			sendJsonResponse(res,200,vehicle);
		}
	})
}

//controller method to edit one vehicle
module.exports.editOne = function(req,res){
	var vehicleData = req.body.vehicle;
	var vehicleid = req.params.vehicleid;
	Vehicle.findByIdAndUpdate(vehicleid,vehicleData, function(err, vehicle){
		if(!err){
			sendJsonResponse(res,200,vehicle);
		}
	})
}


// controller method to remove one vehicle
module.exports.removeOne = function(req,res){
	var vehicleid = req.params.vehicleid;
	Vehicle.findByIdAndRemove(vehicleid, function(err, vehicle){
		if(!err){
			console.log('REMOVED VEHICLE WITH ID', vehicleid);
		}
	})
}


module.exports.topUp = function(req,res){
	var vehicleId = req.body.vehicleId;
	var tokenData = req.body.tokenData;

}


module.exports.payToll = function(req,res){
	
}