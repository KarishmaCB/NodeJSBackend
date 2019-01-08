const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const orderTypeSchema = new mongoose.Schema({
    orderTypeId: {
      type:Number,
      required:true,
    },
    orderType: {
      type:String,
      required:true,
    }
});

// Export the model
module.exports = mongoose.model('OrderType', orderTypeSchema);
