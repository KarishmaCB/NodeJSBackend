'use strict';
var db = require('../config/index.json');
const HomeDelivery = require('mongoose').model('HomeDelivery');

exports.list = function(req, res){
  HomeDelivery.find(function(err, hdelivery){
    if(err){
      throw err;
    }
    res.json(hdelivery);
  });
};

// create actvity
exports.create = function(req, res){
  var hdeliveryReq = req.body;
//console.log(req.body);
  HomeDelivery.create(hdeliveryReq, function(err, hdelivery){
    if(err){
      throw err;
    }
    res.json(hdelivery);
  })
};


exports.read = function(req, res) {
  HomeDelivery.findById(req.params._id, function(err, hdelivery) {
    if (err)
      res.send(err);
    res.json(hdelivery);
  });
};

// update activity
exports.update = function(req, res){
  HomeDelivery.findById(req.params._id, function(err, hdelivery) {
       if(err) {
           res.status(500).send({message: "Could not find a note with id " + req.params._id});
       }

       hdelivery.customerId = req.body.customerId;
       hdelivery.orderId = req.body.orderId;
       hdelivery.address = req.body.address;
       hdelivery.contact = req.body.contact;

       hdelivery.save(function(err, data){
           if(err) {
               res.status(500).send({message: "Could not update note with id " + req.params._id});
           }
          res.json(data);

       });
   });
};

exports.delete = function(req, res){
  var query = {_id: req.params._id};

  HomeDelivery.remove(query, function(err, hdelivery){
    if(err){
      console.log("# API DELETE ACTIVITY: ", err);
    }
    res.json(hdelivery);
  })
};
