const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const menuSchema = new mongoose.Schema({
    name: {
      type:String,
      required:true,
    },
    price: {
      type:String,
      required:true,
    },
    typeId: {
      type:String,
      required:true,
    },
    category: {
      type:String,
      required:false,
    }
});

// Export the model
module.exports = mongoose.model('Menu', menuSchema);
