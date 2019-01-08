'use strict';
var db = require('../config/index.json');
const Table = require('mongoose').model('Table');

exports.list = function(req, res){
  Table.find(function(err, table){
    if(err){
      throw err;
    }
    res.json(table);
  });
};

// create actvity
exports.create = function(req, res){
  var tableReq = req.body;
//console.log(req.body);
  Table.create(tableReq, function(err, table){
    if(err){
      throw err;
    }
    res.json(table);
  })
};


exports.read = function(req, res) {
  Table.findById(req.params._id, function(err, table) {
    if (err)
      res.send(err);
    res.json(table);
  });
};

// update activity
exports.update = function(req, res){
  Table.findById(req.params._id, function(err, table) {
       if(err) {
           res.status(500).send({message: "Could not find a note with id " + req.params._id});
       }

       table.tableStatusId = req.body.tableStatusId;
       table.tableNum = req.body.tableNum;
       table.details = req.body.details;

       table.save(function(err, data){
           if(err) {
               res.status(500).send({message: "Could not update note with id " + req.params._id});
           }
          res.json(data);

       });
   });
};

exports.delete = function(req, res){
  var query = {_id: req.params._id};

  Table.remove(query, function(err, table){
    if(err){
      console.log("# API DELETE ACTIVITY: ", err);
    }
    res.json(table);
  })
};
