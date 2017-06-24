const mongoose = require('mongoose');

// var userSchema = mongoose.Schema();

var User = mongoose.model('User',{

	name: {
		type: String,
		required: true,
		trim: true,
		minlength: 6
	},
	email: {
		type: String,
		required: true,
		trim: true,
		minlength: 6
	},
	password: {
		type: String,
		required: true,
		minlength: 6
	},
	tokens: [{
		access:{
			type: String,
			required: true
		},
		token:{
			type: String,
			required:true
		}
	}]
});

module.exports = {User};