'use strict';
var db = require('../config/index.json');
const Reservation = require('mongoose').model('Reservation');

exports.list = function(req, res){
  Reservation.find(function(err, reservation){
    if(err){
      throw err;
    }
    res.json(reservation);
  });
};

// create actvity
exports.create = function(req, res){
  var reservationReq = req.body;
//console.log(req.body);
  Reservation.create(reservationReq, function(err, reservation){
    if(err){
      throw err;
    }
    res.json(reservation);
  })
};


exports.read = function(req, res) {
  Reservation.findById(req.params._id, function(err, reservation) {
    if (err)
      res.send(err);
    res.json(reservation);
  });
};

// update activity
exports.update = function(req, res){
  Reservation.findById(req.params._id, function(err, reservation) {
       if(err) {
           res.status(500).send({message: "Could not find a note with id " + req.params._id});
       }

       reservation.date = req.body.date;
       reservation.customerId = req.body.customerId;
       reservation.tableId = req.body.tableId;

       reservation.save(function(err, data){
           if(err) {
               res.status(500).send({message: "Could not update note with id " + req.params._id});
           }
          res.json(data);

       });
   });
};

exports.delete = function(req, res){
  var query = {_id: req.params._id};

  Reservation.remove(query, function(err, reservation){
    if(err){
      console.log("# API DELETE ACTIVITY: ", err);
    }
    res.json(reservation);
  })
};
