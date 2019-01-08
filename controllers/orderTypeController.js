'use strict';
var db = require('../config/index.json');
const OrderType = require('mongoose').model('OrderType');

exports.list = function(req, res){
  OrderType.find(function(err, ordertype){
    if(err){
      throw err;
    }
    res.json(ordertype);
  });
};

// create actvity
exports.create = function(req, res){
  var ordertypeReq = req.body;
//console.log(req.body);
  OrderType.create(ordertypeReq, function(err, ordertype){
    if(err){
      throw err;
    }
    res.json(ordertype);
  })
};


exports.read = function(req, res) {
  OrderType.findById(req.params._id, function(err, ordertype) {
    if (err)
      res.send(err);
    res.json(ordertype);
  });
};

// update activity
exports.update = function(req, res){
  OrderType.findById(req.params._id, function(err, ordertype) {
       if(err) {
           res.status(500).send({message: "Could not find a note with id " + req.params._id});
       }

       ordertype.orderTypeId = req.body.orderTypeId;
       ordertype.orderType = req.body.orderType;

       ordertype.save(function(err, data){
           if(err) {
               res.status(500).send({message: "Could not update note with id " + req.params._id});
           }
          res.json(data);

       });
   });
};

exports.delete = function(req, res){
  var query = {_id: req.params._id};

  OrderType.remove(query, function(err, ordertype){
    if(err){
      console.log("# API DELETE ACTIVITY: ", err);
    }
    res.json(ordertype);
  })
};
