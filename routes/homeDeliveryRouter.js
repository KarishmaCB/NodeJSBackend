var express = require('express');
var router = express.Router();

const homeDelivery = require('../controllers/homeDeliveryController');

router.route('/homeDelivery')
        .get(homeDelivery.list)
        .post(homeDelivery.create);
router.route('/homeDelivery/:_id')
        .get(homeDelivery.read)
        .put(homeDelivery.update)
        .delete(homeDelivery.delete);

module.exports = router;
