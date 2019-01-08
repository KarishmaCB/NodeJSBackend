'use strict';
var db = require('../config/index.json');
const Cook = require('mongoose').model('Cook');

exports.list = function(req, res){
  Cook.find(function(err, cook){
    if(err){
      throw err;
    }
    res.json(cook);
  });
};

// create actvity
exports.create = function(req, res){
  var cookReq = req.body;
//console.log(req.body);
  Cook.create(cookReq, function(err, cook){
    if(err){
      throw err;
    }
    res.json(cook);
  })
};


exports.read = function(req, res) {
  Cook.findById(req.params._id, function(err, cook) {
    if (err)
      res.send(err);
    res.json(cook);
  });
};

// update activity
exports.update = function(req, res){
  Cook.findById(req.params._id, function(err, cook) {
       if(err) {
           res.status(500).send({message: "Could not find a note with id " + req.params._id});
       }

       cook.name = req.body.name;
       cook.address = req.body.address;
       cook.phone = req.body.phone;
       cook.salary = req.body.salary;
       cook.joinDate = req.body.joinDate;
       cook.specialization = req.body.specialization;

       cook.save(function(err, data){
           if(err) {
               res.status(500).send({message: "Could not update note with id " + req.params._id});
           }
          res.json(data);

       });
   });
};

exports.delete = function(req, res){
  var query = {_id: req.params._id};

  Cook.remove(query, function(err, cook){
    if(err){
      console.log("# API DELETE ACTIVITY: ", err);
    }
    res.json(cook);
  })
};
