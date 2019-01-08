'use strict';
var db = require('../config/index.json');
const MenuBill = require('mongoose').model('MenuBill');

exports.list = function(req, res){
  MenuBill.find(function(err, mbill){
    if(err){
      throw err;
    }
    res.json(mbill);
  });
};

// create actvity
exports.create = function(req, res){
  var mbillReq = req.body;
//console.log(req.body);
  MenuBill.create(mbillReq, function(err, mbill){
    if(err){
      throw err;
    }
    res.json(mbill);
  })
};


exports.read = function(req, res) {
  MenuBill.findById(req.params._id, function(err, mbill) {
    if (err)
      res.send(err);
    res.json(mbill);
  });
};

// update activity
exports.update = function(req, res){
  MenuBill.findById(req.params._id, function(err, mbill) {
       if(err) {
           res.status(500).send({message: "Could not find a note with id " + req.params._id});
       }

       mbill.orderId = req.body.orderId;
       mbill.itemName = req.body.itemName;
       mbill.itemQuantity = req.body.itemQuantity;
       mbill.price = req.body.price;

       mbill.save(function(err, data){
           if(err) {
               res.status(500).send({message: "Could not update note with id " + req.params._id});
           }
          res.json(data);

       });
   });
};

exports.delete = function(req, res){
  var query = {_id: req.params._id};

  MenuBill.remove(query, function(err, mbill){
    if(err){
      console.log("# API DELETE ACTIVITY: ", err);
    }
    res.json(mbill);
  })
};
