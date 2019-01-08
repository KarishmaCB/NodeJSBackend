'use strict';
var db = require('../config/index.json');
const Employee = require('mongoose').model('Employee');

exports.list = function(req, res){
  Employee.find(function(err, employee){
    if(err){
      throw err;
    }
    res.json(employee);
  });
};

// create actvity
exports.create = function(req, res){
  var employeeReq = req.body;
//console.log(req.body);
  Employee.create(employeeReq, function(err, employee){
    if(err){
      throw err;
    }
    res.json(employee);
  })
};


exports.read = function(req, res) {
  Employee.findById(req.params._id, function(err, employee) {
    if (err)
      res.send(err);
    res.json(employee);
  });
};

// update activity
exports.update = function(req, res){
  Employee.findById(req.params._id, function(err, employee) {
       if(err) {
           res.status(500).send({message: "Could not find a note with id " + req.params._id});
       }

       employee.typeId = req.body.typeId;
       employee.name = req.body.name;
       employee.address = req.body.address;
       employee.phone = req.body.phone;
       employee.salary = req.body.salary;
       employee.joinDate = req.body.joinDate;
       employee.isCook = req.body.isCook;

       employee.save(function(err, data){
           if(err) {
               res.status(500).send({message: "Could not update note with id " + req.params._id});
           }
          res.json(data);

       });
   });
};

exports.delete = function(req, res){
  var query = {_id: req.params._id};

  Employee.remove(query, function(err, employee){
    if(err){
      console.log("# API DELETE ACTIVITY: ", err);
    }
    res.json(employee);
  })
};
