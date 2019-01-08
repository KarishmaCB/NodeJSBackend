const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const menuBillSchema = new mongoose.Schema({
    orderId: {
      type:Number,
      required:true,
    },
    itemName: {
      type:String,
      required:true,
    },
    itemQuantity: {
      type:String,
      required:true,
    },
    price: {
      type:String,
      required:true,
    }
});

// Export the model
module.exports = mongoose.model('MenuBill', menuBillSchema);
