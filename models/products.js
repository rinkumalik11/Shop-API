const mongoose = require('mongoose');

// var productSchema = mongoose.Schema();

var Products = mongoose.model('Product',{
	name: {
		type: String,
		required:true,
		trim: true,
		minlength: 2
	},
	type:{
		type: String,
		required:true,
		trim: true,
		minlength: 2
	},
	price:{
		type: String,
		required:true,
		trim: true,
		minlength: 2
	},
	desc:{
		type: String,
		required:true,
		trim: true,
		minlength: 10
	}
});

module.exports = {Products};