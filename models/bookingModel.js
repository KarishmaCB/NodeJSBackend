const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const bookingSchema = new mongoose.Schema({
    tableNum:{
      type:Number,
      required:true,
    },
    date:{
      type:Date,
      required:true,
    },
    time:{
      type:String,
      required:true,
    },
    customerId:{
      type:Number,
      required:true,
    },
});

// Export the model
module.exports = mongoose.model('Booking', bookingSchema);
