const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const homeDeliverySchema = new mongoose.Schema({
    customerId: {
      type:Number,
      required:true,
    },
    orderId: {
      type:Number,
      required:true,
    },
    address: {
      type:String,
      required:true,
    },
    contact: {
      type:String,
      required:true,
    }
});

// Export the model
module.exports = mongoose.model('HomeDelivery', homeDeliverySchema);
