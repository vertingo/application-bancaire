var express = require('express');
var app = express();
var router = express.Router();
var mouvement = require('../../models/mouvement');
var mongoose = require('mongoose');


/* GET ALL mouvement */
router.get('/', function(req, res, next) {
	mouvement.find(function (err, products) {
	  if (err) return next(err);
	  res.json(products);
	});
  });
  
  /* GET SINGLE mouvement BY ID */
  router.get('/:id', function(req, res, next) {
	mouvement.findById(req.params.id, function (err, post) {
	  if (err) return next(err);
	  res.json(post);
	});
  });
  
  /* SAVE mouvement */
  router.post('/', function(req, res, next) {
	mouvement.create(req.body, function (err, post) {
	  if (err) return next(err);
	  res.json(post);
	});
  });
  
  /* UPDATE mouvement */
  router.put('/:id', function(req, res, next) {
	mouvement.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
	  if (err) return next(err);
	  res.json(post);
	});
  });
  
  /* DELETE mouvement */
  router.delete('/:id', function(req, res, next) {
	mouvement.findByIdAndRemove(req.params.id, req.body, function (err, post) {
	  if (err) return next(err);
	  res.json(post);
	});
  });
  
  module.exports = router;
  