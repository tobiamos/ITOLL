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