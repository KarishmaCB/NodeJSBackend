const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const orderSchema = new mongoose.Schema({
    date: {
      type:Date,
      required:true,
    },
    orderTypeId: {
      type:Number,
      required:true,
    },
    description: {
      type:String,
      required:false,
    }
});

// Export the model
module.exports = mongoose.model('Order', orderSchema);
