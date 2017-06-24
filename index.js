const bodyParser = require('body-parser');
const express = require('express');
const _ = require('lodash');

var mongoose = require('./db/mongoose');
var {User} = require('./models/user');
var {Products} = require('./models/products');

var app = express();

app.use(bodyParser.json());

app.post('/product', (req,res) => {

	var product = new Products({
		name: req.body.name,
		type: req.body.type,
		price: req.body.price,
		desc: req.body.desc,
	});

	product.save().then((r) => {
		res.send(r);
	},
	(e) => {
		res.send(e);
	});
});

app.get('/product',(req,res) => {

	Products.find().then((p) => {
		res.send(p);
	},(e) => {
		res.send(e);
	});
});

app.get('/product/:id',(req,res) => {

	var id = req.params.id;

	Products.findById(id).then((p) => {
		res.send(p);
	},(e) => {
		res.send(e);
	});
});


app.delete('/product/:id',(req,res) => {

	var id = req.params.id;

	Products.findByIdAndRemove(id).then((r) => {
		res.send(r);
	},(e) => {
		res.send(e);
	});
});



app.listen(3000, () => {
	console.log('App is listening on port 3000');
});