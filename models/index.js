const mongoose = require('mongoose');

module.exports.connect = (uri) => {
  mongoose.connect(uri);
  // plug in the promise library:
  mongoose.Promise = global.Promise;


  mongoose.connection.on('error', (err) => {
    console.error(`Mongoose connection error: ${err}`);
    process.exit(1);
  });
  console.log('Database connected');
  // load models
  require('./billModel');
  require('./bookingModel');
  require('./cookModel');
  require('./customerModel');
  require('./employeeModel');
  require('./empTypeModel');
  require('./homeDeliveryModel');
  require('./inventoryModel');
  require('./menuBillModel');
  require('./menuModel');
  require('./menuTypeModel');
  require('./orderModel');
  require('./orderTypeModel');
  require('./reservationModel');
  require('./restaurantModel');
  require('./saleDetailsModel');
  require('./supplierModel');
  require('./tableModel');
  require('./tableStatusModel');
};
