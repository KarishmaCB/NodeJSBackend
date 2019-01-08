const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const inventorySchema = new mongoose.Schema({
    name: {
      type:String,
      required:true,
    },
  	quantity: {
      type:String,
      required:true,
    },
  	description: {
      type:String,
      required:false,
    },
  	supplierId: {
      type:Number,
      required:true,
    }
});

// Export the model
module.exports = mongoose.model('Inventory', inventorySchema);
