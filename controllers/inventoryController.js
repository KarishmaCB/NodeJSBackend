'use strict';
var db = require('../config/index.json');
const Inventory = require('mongoose').model('Inventory');

exports.list = function(req, res){
  Inventory.find(function(err, inventory){
    if(err){
      throw err;
    }
    res.json(inventory);
  });
};

// create actvity
exports.create = function(req, res){
  var inventoryReq = req.body;
//console.log(req.body);
  Inventory.create(inventoryReq, function(err, inventory){
    if(err){
      throw err;
    }
    res.json(inventory);
  })
};


exports.read = function(req, res) {
  Inventory.findById(req.params._id, function(err, inventory) {
    if (err)
      res.send(err);
    res.json(inventory);
  });
};

// update activity
exports.update = function(req, res){
  Inventory.findById(req.params._id, function(err, inventory) {
       if(err) {
           res.status(500).send({message: "Could not find a note with id " + req.params._id});
       }

       inventory.name = req.body.name;
       inventory.quantity = req.body.quantity;
       inventory.description = req.body.description;
       inventory.supplierId = req.body.supplierId;
  
       inventory.save(function(err, data){
           if(err) {
               res.status(500).send({message: "Could not update note with id " + req.params._id});
           }
          res.json(data);

       });
   });
};

exports.delete = function(req, res){
  var query = {_id: req.params._id};

  Inventory.remove(query, function(err, inventory){
    if(err){
      console.log("# API DELETE ACTIVITY: ", err);
    }
    res.json(inventory);
  })
};
