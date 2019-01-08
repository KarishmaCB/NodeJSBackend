var express = require('express');
var router = express.Router();

const orderType = require('../controllers/orderTypeController');

router.route('/orderType')
        .get(orderType.list)
        .post(orderType.create);
router.route('/orderType/:_id')
        .get(orderType.read)
        .put(orderType.update)
        .delete(orderType.delete);

module.exports = router;
