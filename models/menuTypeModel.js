const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const menuTypeSchema = new mongoose.Schema({
    typeid: {
      type:Number,
      required:true,
    },
    type: {
      type:String,
      required:true,
    }
});

// Export the model
module.exports = mongoose.model('MenuType', menuTypeSchema);
