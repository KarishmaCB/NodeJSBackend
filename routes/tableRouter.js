var express = require('express');
var router = express.Router();

const table = require('../controllers/tableController');

router.route('/table')
        .get(table.list)
        .post(table.create);
router.route('/table/:_id')
        .get(table.read)
        .put(table.update)
        .delete(table.delete);

module.exports = router;
