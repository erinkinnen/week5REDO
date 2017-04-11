var mongoose = require('mongoose');
var mongoURI = 'mongodb://localhost:27017/week5_redo';
var MongoDB = mongoose.connect(mongoURI).connection;

MongoDB.on('error', function(error){
  console.log('Mongo Connection error', error);
});

MongoDB.once('open', function(){
  console.log('Mongo Connection open');
});

module.exports = MongoDB;
