const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const saleDetailsSchema = new mongoose.Schema({
    empName: {
      type:String,
      required:true,
    },
    itemId: {
      type:Number,
      required:true,
    },
    date: {
      typr:Date,
      required:false,
    },
    itemName: {
      type:String,
      required:false,
    },
    daily: {
      type:Number,
      required:false,
    },
    weekly: {
      type:Number,
      required:false,
    },
    monthly: {
      type:Number,
      required:false,
    }
});

// Export the model
module.exports = mongoose.model('SaleDetails', saleDetailsSchema);
