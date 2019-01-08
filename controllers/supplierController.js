'use strict';
var db = require('../config/index.json');
const Supplier = require('mongoose').model('Supplier');

exports.list = function(req, res){
  Supplier.find(function(err, supplier){
    if(err){
      throw err;
    }
    res.json(supplier);
  });
};

// create actvity
exports.create = function(req, res){
  var supplierReq = req.body;
//console.log(req.body);
  Supplier.create(supplierReq, function(err, supplier){
    if(err){
      throw err;
    }
    res.json(supplier);
  })
};


exports.read = function(req, res) {
  Supplier.findById(req.params._id, function(err, supplier) {
    if (err)
      res.send(err);
    res.json(supplier);
  });
};

// update activity
exports.update = function(req, res){
  Supplier.findById(req.params._id, function(err, supplier) {
       if(err) {
           res.status(500).send({message: "Could not find a note with id " + req.params._id});
       }

       supplier.name = req.body.name;
       supplier.address = req.body.address;
       supplier.phone = req.body.phone;
       supplier.details = req.body.details;

       supplier.save(function(err, data){
           if(err) {
               res.status(500).send({message: "Could not update note with id " + req.params._id});
           }
          res.json(data);

       });
   });
};

exports.delete = function(req, res){
  var query = {_id: req.params._id};

  Supplier.remove(query, function(err, supplier){
    if(err){
      console.log("# API DELETE ACTIVITY: ", err);
    }
    res.json(supplier);
  })
};
