var mongoose = require('mongoose');
var dbURI = 'mongodb://127.0.0.1/tolling';
mongoose.connect('dbURI');

mongoose.connection.on('connected', function(){
	console.log('connected to', dbURI);
});

mongoose.connection.on('error', function(err){
	console.log('error connecting', err);

});

mongoose.connection.on('disconnected', function(){
	console.log('disconneted from ', dbURI);
})