'use strict';
var db = require('../config/index.json');
const MenuType = require('mongoose').model('MenuType');

exports.list = function(req, res){
  MenuType.find(function(err, menutype){
    if(err){
      throw err;
    }
    res.json(menutype);
  });
};

// create actvity
exports.create = function(req, res){
  var menutypeReq = req.body;
//console.log(req.body);
  MenuType.create(menutypeReq, function(err, menutype){
    if(err){
      throw err;
    }
    res.json(menutype);
  })
};


exports.read = function(req, res) {
  MenuType.findById(req.params._id, function(err, menutype) {
    if (err)
      res.send(err);
    res.json(menutype);
  });
};

// update activity
exports.update = function(req, res){
  MenuType.findById(req.params._id, function(err, menutype) {
       if(err) {
           res.status(500).send({message: "Could not find a note with id " + req.params._id});
       }

       menutype.typeid = req.body.typeid;
       menutype.type = req.body.type;

       menutype.save(function(err, data){
           if(err) {
               res.status(500).send({message: "Could not update note with id " + req.params._id});
           }
          res.json(data);

       });
   });
};

exports.delete = function(req, res){
  var query = {_id: req.params._id};

  MenuType.remove(query, function(err, menutype){
    if(err){
      console.log("# API DELETE ACTIVITY: ", err);
    }
    res.json(menutype);
  })
};
