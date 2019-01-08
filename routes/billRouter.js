var express = require('express');
var router = express.Router();

const bill = require('../controllers/billController');

router.route('/bill')
        .get(bill.list)
        .post(bill.create);
router.route('/bill/:_id')
        .get(bill.read)
        .put(bill.update)
        .delete(bill.delete);

module.exports = router;
