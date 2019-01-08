var express = require('express');
var router = express.Router();

const saleDetails = require('../controllers/saleDetailsController');

router.route('/saleDetails')
        .get(saleDetails.list)
        .post(saleDetails.create);
router.route('/saleDetails/:_id')
        .get(saleDetails.read)
        .put(saleDetails.update)
        .delete(saleDetails.delete);

module.exports = router;
