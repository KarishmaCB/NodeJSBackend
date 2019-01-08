const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const cookSchema = new mongoose.Schema({
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
    salary: {
      type:Number,
      required:true,
    },
    joinDate: {
      type:Date,
      required:true,
    },
    specialization: {
      type:String,
      required:false,
    },
});

// Export the model
module.exports = mongoose.model('Cook', cookSchema);
