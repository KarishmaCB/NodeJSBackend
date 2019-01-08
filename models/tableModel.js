const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const tableSchema = new mongoose.Schema({
    tableStatusId: {
      type:Number,
      required:true,
    },
    tableNum: {
      type:Number,
      required:true,
    },
    details: {
      type:String,
      required:false,
    }
});

// Export the model
module.exports = mongoose.model('Table', tableSchema);
