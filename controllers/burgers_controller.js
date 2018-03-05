const express = require('express');
const burger = require('../models/burger');

const router = express.Router();

router.get('/', function(req, res){
	burger.selectAll(function(data){
		res.render('index', { burgers: data});
	});
});

router.post('/api/burger', function(req, res){
	burger.insertOne('burger_name', req.body.name, function(result){
		res.json({id: result.insertId});
	});
});

router.put('/api/burger/:id', function(req, res){
	burger.updateOne('burger_name', req.params.id, function(result){
		res.json({id: result.insertId});
	});
});

module.exports = router;