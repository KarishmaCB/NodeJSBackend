var express = require('express');
var router = express.Router();

const inventory = require('../controllers/inventoryController');

router.route('/inventory')
        .get(inventory.list)
        .post(inventory.create);
router.route('/inventory/:_id')
        .get(inventory.read)
        .put(inventory.update)
        .delete(inventory.delete);

module.exports = router;
