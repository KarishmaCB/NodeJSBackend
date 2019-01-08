var express = require('express');
var router = express.Router();

const supplier = require('../controllers/supplierController');

router.route('/supplier')
        .get(supplier.list)
        .post(supplier.create);
router.route('/supplier/:_id')
        .get(supplier.read)
        .put(supplier.update)
        .delete(supplier.delete);

module.exports = router;
