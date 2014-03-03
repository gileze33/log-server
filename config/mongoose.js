var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var url = 'mongodb://localhost/logger';//'mongodb://ec2-54-72-17-30.eu-west-1.compute.amazonaws.com/logger';

mongoose.connect(url);

var logSchema = new Schema({
	env: String,
	level: String,
	label: String,
	data: Object,
	timestamp: Date
}, { 
	capped: 1024,
	max: 10000, 
	autoIndexId: true
});

var Log = mongoose.model('Log', logSchema);

module.exports = {
	Log: Log,
	url: url
}

