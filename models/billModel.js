const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const billSchema = new mongoose.Schema({
    name:{
      type:String,
      required:true,
    },
    orderId: {
      type:Number,
      required:true,
    },
    customerId: {
      type:Number,
      required:true,
    },
    customerName: {
      type:String,
      required:false,
    },
    totalAmount: {
      type:Number,
      required:true,
    },
});

// Export the model
module.exports = mongoose.model('Bill', billSchema);
