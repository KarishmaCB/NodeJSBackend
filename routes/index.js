'use strict'
var express = require('express');
var router = express.Router();

var billRouter = require('./billRouter');
var bookingRouter = require('./bookingRouter');
var cookRouter = require('./cookRouter');
var customerRouter = require('./customerRouter');
var employeeRouter = require('./employeeRouter');
var empTypeRouter = require('./empTypeRouter');
var homeDeliveryRouter = require('./homeDeliveryRouter');
var inventoryRouter = require('./inventoryRouter');
var menuBillRouter = require('./menuBillRouter');
var menuRouter = require('./menuRouter');
var menuTypeRouter = require('./menuTypeRouter');
var orderRouter = require('./orderRouter');
var orderTypeRouter = require('./orderTypeRouter');
var reservationRouter = require('./reservationRouter');
var restaurantRouter = require('./restaurantRouter');
var saleDetailsRouter = require('./saleDetailsRouter');
var supplierRouter = require('./supplierRouter');
var tableRouter = require('./tableRouter');
var tableStatusRouter = require('./tableStatusRouter');


module.exports = function(app)
{
  app.use("/api",billRouter);
  app.use("/api",bookingRouter);
  app.use("/api",cookRouter);
  app.use("/api",customerRouter);
  app.use("/api",employeeRouter);
  app.use("/api",empTypeRouter);
  app.use("/api",homeDeliveryRouter);
  app.use("/api",inventoryRouter);
  app.use("/api",menuBillRouter);
  app.use("/api",menuRouter);
  app.use("/api",menuTypeRouter);
  app.use("/api",orderRouter);
  app.use("/api",orderTypeRouter);
  app.use("/api",reservationRouter);
  app.use("/api",restaurantRouter);
  app.use("/api",saleDetailsRouter);
  app.use("/api",supplierRouter);
  app.use("/api",tableRouter);
  app.use("/api",tableStatusRouter);
}
