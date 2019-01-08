'use strict';
var db = require('../config/index.json');
const Bill = require('mongoose').model('Bill');

exports.list = function(req, res){
  Bill.find(function(err, bill){
    if(err){
      throw err;
    }
    res.json(bill);
  });
};

// create actvity
exports.create = function(req, res){
  var billReq = req.body;
//console.log(req.body);
  Bill.create(billReq, function(err, bill){
    if(err){
      throw err;
    }
    res.json(bill);
  })
};


exports.read = function(req, res) {
  Bill.findById(req.params._id, function(err, bill) {
    if (err)
      res.send(err);
    res.json(bill);
  });
};

// update activity
exports.update = function(req, res){
  Bill.findById(req.params._id, function(err, bill) {
       if(err) {
           res.status(500).send({message: "Could not find a note with id " + req.params._id});
       }

       bill.orderId = req.body.orderId;
       bill.customerId = req.body.customerId;
       bill.customerName = req.body.customerName;
       bill.totalAmount = req.body.totalAmount;

       bill.save(function(err, data){
           if(err) {
               res.status(500).send({message: "Could not update note with id " + req.params._id});
           }
          res.json(data);

       });
   });
};

exports.delete = function(req, res){
  var query = {_id: req.params._id};

  Bill.remove(query, function(err, bill){
    if(err){
      console.log("# API DELETE ACTIVITY: ", err);
    }
    res.json(bill);
  })
};
