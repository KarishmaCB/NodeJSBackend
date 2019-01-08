const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const tableStatusSchema = new mongoose.Schema({
    tableStatusId: {
      type:Number,
      required:true,
    },
    tableStatus: {
      type:String,
      required:true,
    }
});

// Export the model
module.exports = mongoose.model('TableStatus', tableStatusSchema);
