'use strict';
var db = require('../config/index.json');
const SaleDetails = require('mongoose').model('SaleDetails');

exports.list = function(req, res){
  SaleDetails.find(function(err, saledetails){
    if(err){
      throw err;
    }
    res.json(saledetails);
  });
};

// create actvity
exports.create = function(req, res){
  var saledetailsReq = req.body;
//console.log(req.body);
  SaleDetails.create(saledetailsReq, function(err, saledetails){
    if(err){
      throw err;
    }
    res.json(saledetails);
  })
};


exports.read = function(req, res) {
  SaleDetails.findById(req.params._id, function(err, saledetails) {
    if (err)
      res.send(err);
    res.json(saledetails);
  });
};

// update activity
exports.update = function(req, res){
  SaleDetails.findById(req.params._id, function(err, saledetails) {
       if(err) {
           res.status(500).send({message: "Could not find a note with id " + req.params._id});
       }

       saledetails.name = req.body.name;
       saledetails.date = req.body.date;
       saledetails.daily = req.body.daily;
       saledetails.weekly = req.body.weekly;
       saledetails.monthly = req.body.monthly;

       saledetails.save(function(err, data){
           if(err) {
               res.status(500).send({message: "Could not update note with id " + req.params._id});
           }
          res.json(data);

       });
   });
};

exports.delete = function(req, res){
  var query = {_id: req.params._id};

  SaleDetails.remove(query, function(err, saledetails){
    if(err){
      console.log("# API DELETE ACTIVITY: ", err);
    }
    res.json(saledetails);
  })
};
