var express = require('express');
var router = express.Router();

const menuBill = require('../controllers/menuBillController');

router.route('/menuBill')
        .get(menuBill.list)
        .post(menuBill.create);
router.route('/menuBill/:_id')
        .get(menuBill.read)
        .put(menuBill.update)
        .delete(menuBill.delete);

module.exports = router;
