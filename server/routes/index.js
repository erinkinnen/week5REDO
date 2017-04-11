var express = require('express');
var router = express.Router();
var mongoose= require('mongoose');

var MovieSchema = mongoose.Schema({
  title: String,
  plot: String
});

var Movie = mongoose.model('movie', 'MovieSchema', 'movie');








module.exports = router;
