'use strict';
var db = require('../config/index.json');
const Restaurant = require('mongoose').model('Restaurant');

exports.list = function(req, res){
  Restaurant.find(function(err, restaurant){
    if(err){
      throw err;
    }
    res.json(restaurant);
  });
};

// create actvity
exports.create = function(req, res){
  var restaurantReq = req.body;
//console.log(req.body);
  Restaurant.create(restaurantReq, function(err, restaurant){
    if(err){
      throw err;
    }
    res.json(restaurant);
  })
};


exports.read = function(req, res) {
  Restaurant.findById(req.params._id, function(err, restaurant) {
    if (err)
      res.send(err);
    res.json(restaurant);
  });
};

// update activity
exports.update = function(req, res){
  Restaurant.findById(req.params._id, function(err, restaurant) {
       if(err) {
           res.status(500).send({message: "Could not find a note with id " + req.params._id});
       }

       restaurant.name = req.body.name;
       restaurant.address = req.body.address;
       restaurant.phone = req.body.phone;
       restaurant.openingTime = req.body.openingTime;
       restaurant.closingTime = req.body.closingTime;

       restaurant.save(function(err, data){
           if(err) {
               res.status(500).send({message: "Could not update note with id " + req.params._id});
           }
          res.json(data);

       });
   });
};

exports.delete = function(req, res){
  var query = {_id: req.params._id};

  Restaurant.remove(query, function(err, restaurant){
    if(err){
      console.log("# API DELETE ACTIVITY: ", err);
    }
    res.json(restaurant);
  })
};
