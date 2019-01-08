const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const employeeSchema = new mongoose.Schema({
    typeId: {
      type:Number,
      required:true,
    },
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
    isCook: {
      type:Boolean,
      required:true,
    }
});

// Export the model
module.exports = mongoose.model('Employee', employeeSchema);
