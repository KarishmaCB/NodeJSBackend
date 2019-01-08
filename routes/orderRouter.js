var express = require('express');
var router = express.Router();

const order = require('../controllers/orderController');

router.route('/order')
        .get(order.list)
        .post(order.create);
router.route('/order/:_id')
        .get(order.read)
        .put(order.update)
        .delete(order.delete);

module.exports = router;
