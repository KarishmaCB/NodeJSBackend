const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const empTypeSchema = new mongoose.Schema({
  typeId: {
    type:Number,
    required:true,
  },
  designation: {
    type:String,
    required:true,
  }
});

// Export the model
module.exports = mongoose.model('EmployeeType', empTypeSchema);
