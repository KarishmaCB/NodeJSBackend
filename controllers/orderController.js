'use strict';
var db = require('../config/index.json');
const Order = require('mongoose').model('Order');

exports.list = function(req, res){
  Order.find(function(err, order){
    if(err){
      throw err;
    }
    res.json(order);
  });
};

// create actvity
exports.create = function(req, res){
  var cookReq = req.body;
//console.log(req.body);
  Order.create(cookReq, function(err, order){
    if(err){
      throw err;
    }
    res.json(order);
  })
};


exports.read = function(req, res) {
  Order.findById(req.params._id, function(err, order) {
    if (err)
      res.send(err);
    res.json(order);
  });
};

// update activity
exports.update = function(req, res){
  Order.findById(req.params._id, function(err, order) {
       if(err) {
           res.status(500).send({message: "Could not find a note with id " + req.params._id});
       }

       order.date = req.body.date;
       order.orderTypeId = req.body.orderTypeId;

       order.save(function(err, data){
           if(err) {
               res.status(500).send({message: "Could not update note with id " + req.params._id});
           }
          res.json(data);

       });
   });
};

exports.delete = function(req, res){
  var query = {_id: req.params._id};

  Order.remove(query, function(err, order){
    if(err){
      console.log("# API DELETE ACTIVITY: ", err);
    }
    res.json(order);
  })
};
