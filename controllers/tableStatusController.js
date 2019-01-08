'use strict';
var db = require('../config/index.json');
const TableStatus = require('mongoose').model('TableStatus');

exports.list = function(req, res){
  TableStatus.find(function(err, tablestatus){
    if(err){
      throw err;
    }
    res.json(tablestatus);
  });
};

// create actvity
exports.create = function(req, res){
  var tablestatusReq = req.body;
//console.log(req.body);
  TableStatus.create(tablestatusReq, function(err, tablestatus){
    if(err){
      throw err;
    }
    res.json(tablestatus);
  })
};


exports.read = function(req, res) {
  TableStatus.findById(req.params._id, function(err, tablestatus) {
    if (err)
      res.send(err);
    res.json(tablestatus);
  });
};

// update activity
exports.update = function(req, res){
  TableStatus.findById(req.params._id, function(err, tablestatus) {
       if(err) {
           res.status(500).send({message: "Could not find a note with id " + req.params._id});
       }

       tablestatus.tableStatusId = req.body.tableStatusId;
       tablestatus.tableStatus = req.body.tableStatus;

       tablestatus.save(function(err, data){
           if(err) {
               res.status(500).send({message: "Could not update note with id " + req.params._id});
           }
          res.json(data);

       });
   });
};

exports.delete = function(req, res){
  var query = {_id: req.params._id};

  TableStatus.remove(query, function(err, tablestatus){
    if(err){
      console.log("# API DELETE ACTIVITY: ", err);
    }
    res.json(tablestatus);
  })
};
