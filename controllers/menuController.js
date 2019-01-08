'use strict';
var db = require('../config/index.json');
const Menu = require('mongoose').model('Menu');

exports.list = function(req, res){
  Menu.find(function(err, menu){
    if(err){
      throw err;
    }
    res.json(cook);
  });
};

// create actvity
exports.create = function(req, res){
  var menuReq = req.body;
//console.log(req.body);
  Menu.create(menuReq, function(err, menu){
    if(err){
      throw err;
    }
    res.json(menu);
  })
};


exports.read = function(req, res) {
  Menu.findById(req.params._id, function(err, menu) {
    if (err)
      res.send(err);
    res.json(menu);
  });
};

// update activity
exports.update = function(req, res){
  Menu.findById(req.params._id, function(err, menu) {
       if(err) {
           res.status(500).send({message: "Could not find a note with id " + req.params._id});
       }

       menu.name = req.body.name;
       menu.price = req.body.price;
       menu.typeId = req.body.typeId;
       menu.category = req.body.category;

       menu.save(function(err, data){
           if(err) {
               res.status(500).send({message: "Could not update note with id " + req.params._id});
           }
          res.json(data);

       });
   });
};

exports.delete = function(req, res){
  var query = {_id: req.params._id};

  Menu.remove(query, function(err, menu){
    if(err){
      console.log("# API DELETE ACTIVITY: ", err);
    }
    res.json(menu);
  })
};
