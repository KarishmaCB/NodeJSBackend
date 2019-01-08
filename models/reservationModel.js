const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const reservationSchema = new mongoose.Schema({
    date: {
      type:Date,
      required:true,
    },
    customerId: {
      type:Number,
      required:true,
    },
    tableId: {
      type:Number,
      required:true,
    }
});

// Export the model
module.exports = mongoose.model('Reservation', reservationSchema);
