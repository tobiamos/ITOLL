var mongoose = require('mongoose');
var Vehicle  = require('../models/vehicles');

var sendJsonResponse= function (res, status ,content){
	res.json(content);
	res.status(status);
}
module.exports.findAll = function(req,res){

	Vehicle.find({},function(err, vehicle){
		if(!err){
			sendJsonResponse(res,200,vehicle);
		}
	})
}


module.exports.findOne = function(req,res,){
	var vehicleid = req.params.vehicleid;
	Vehicle.findById(vehicleid, function(err, vehicle){
		if(!err){
			sendJsonResponse(res,200, vehicle);
		}
	})
}

module.exports.createOne = function(req,res){
	var vehicleData = req.body.vehicle;
	Vehicle.create(vehicleData, function(err,vehicle){
		if(!err){
			sendJsonResponse(res,200,vehicle);
		}
	})
}

module.exports.editOne = function(req,res){
	var vehicleData = req.body.vehicle;
	var vehicleid = req.params.vehicleid;
	Vehicle.findByIdAndUpdate(vehicleid,vehicleData, function(err, vehicle){
		if(!err){
			sendJsonResponse(res,200,vehicle);
		}
	})
}


module.exports.removeOne = function(req,res){
	var vehicleid = req.params.vehicleid;
	Vehicle.findByIdAndRemove(vehicleid, function(err, vehicle){
		if(!err){
			console.log('REMOVED VEHICLE WITH ID', vehicleid);
		}
	})
}