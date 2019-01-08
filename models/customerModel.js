const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const customerSchema = new mongoose.Schema({
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
});

// Export the model
module.exports = mongoose.model('Customer', customerSchema);
