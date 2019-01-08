'use strict';
var db = require('../config/index.json');
const Customer = require('mongoose').model('Customer');

exports.list = function(req, res){
  Customer.find(function(err, customer){
    if(err){
      throw err;
    }
    res.json(customer);
  });
};

// create actvity
exports.create = function(req, res){
  var customerReq = req.body;
//console.log(req.body);
  Customer.create(customerReq, function(err, customer){
    if(err){
      throw err;
    }
    res.json(customer);
  })
};


exports.read = function(req, res) {
  Customer.findById(req.params._id, function(err, customer) {
    if (err)
      res.send(err);
    res.json(customer);
  });
};

// update activity
exports.update = function(req, res){
  Customer.findById(req.params._id, function(err, customer) {
       if(err) {
           res.status(500).send({message: "Could not find a note with id " + req.params._id});
       }

       customer.name = req.body.name;
       customer.address = req.body.address;
       customer.phone = req.body.phone;

       customer.save(function(err, data){
           if(err) {
               res.status(500).send({message: "Could not update note with id " + req.params._id});
           }
          res.json(data);

       });
   });
};

exports.delete = function(req, res){
  var query = {_id: req.params._id};

  Customer.remove(query, function(err, customer){
    if(err){
      console.log("# API DELETE ACTIVITY: ", err);
    }
    res.json(customer);
  })
};
