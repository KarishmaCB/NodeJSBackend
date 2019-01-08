const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
    name: {
      type:String,
      required:true,
    },
    address: {
      type:String,
      required:false,
    },
    phone: {
      type:String,
      required:false,
    },
    openingTime: {
      type:String,
      required:false,
    },
    closingTime: {
      type:String,
      required:false,
    }
});

// Export the model
module.exports = mongoose.model('Restaurant', restaurantSchema);
