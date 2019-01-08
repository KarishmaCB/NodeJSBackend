'use strict';
var db = require('../config/index.json');
const Booking = require('mongoose').model('Booking');

exports.list = function(req, res){
  Booking.find(function(err, booking){
    if(err){
      throw err;
    }
    res.json(booking);
  });
};

// create actvity
exports.create = function(req, res){
  var bookingReq = req.body;
//console.log(req.body);
  Booking.create(bookingReq, function(err, booking){
    if(err){
      throw err;
    }
    res.json(booking);
  })
};


exports.read = function(req, res) {
  Booking.findById(req.params._id, function(err, booking) {
    if (err)
      res.send(err);
    res.json(booking);
  });
};

// update activity
exports.update = function(req, res){
  Booking.findById(req.params._id, function(err, booking) {
       if(err) {
           res.status(500).send({message: "Could not find a note with id " + req.params._id});
       }

       booking.tableNum = req.body.tableNum;
       booking.date = req.body.date;
       booking.time = req.body.time;
       booking.customerId = req.body.customerId;
    
       booking.save(function(err, data){
           if(err) {
               res.status(500).send({message: "Could not update note with id " + req.params._id});
           }
          res.json(data);

       });
   });
};

exports.delete = function(req, res){
  var query = {_id: req.params._id};

  Booking.remove(query, function(err, booking){
    if(err){
      console.log("# API DELETE ACTIVITY: ", err);
    }
    res.json(booking);
  })
};
