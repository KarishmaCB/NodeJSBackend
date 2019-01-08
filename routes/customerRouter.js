var express = require('express');
var router = express.Router();

const customer = require('../controllers/customerController');

router.route('/customer')
        .get(customer.list)
        .post(customer.create);
router.route('/customer/:_id')
        .get(customer.read)
        .put(customer.update)
        .delete(customer.delete);

module.exports = router;
