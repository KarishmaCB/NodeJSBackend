'use strict';
var db = require('../config/index.json');
const EmpType = require('mongoose').model('EmployeeType');

exports.list = function(req, res){
  EmpType.find(function(err, emptype){
    if(err){
      throw err;
    }
    res.json(emptype);
  });
};

// create actvity
exports.create = function(req, res){
  var emptypeReq = req.body;
//console.log(req.body);
  EmpType.create(emptypeReq, function(err, emptype){
    if(err){
      throw err;
    }
    res.json(emptype);
  })
};


exports.read = function(req, res) {
  EmpType.findById(req.params._id, function(err, emptype) {
    if (err)
      res.send(err);
    res.json(emptype);
  });
};

// update activity
exports.update = function(req, res){
  EmpType.findById(req.params._id, function(err, emptype) {
       if(err) {
           res.status(500).send({message: "Could not find a note with id " + req.params._id});
       }

       emptype.typeId = req.body.typeId;
       emptype.designation = req.body.designation;

       emptype.save(function(err, data){
           if(err) {
               res.status(500).send({message: "Could not update note with id " + req.params._id});
           }
          res.json(data);

       });
   });
};

exports.delete = function(req, res){
  var query = {_id: req.params._id};

  EmpType.remove(query, function(err, emptype){
    if(err){
      console.log("# API DELETE ACTIVITY: ", err);
    }
    res.json(emptype);
  })
};
