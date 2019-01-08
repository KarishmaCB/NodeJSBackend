var express = require('express');
var router = express.Router();

const tableStatus = require('../controllers/tableStatusController');

router.route('/tableStatus')
        .get(tableStatus.list)
        .post(tableStatus.create);
router.route('/tableStatus/:_id')
        .get(tableStatus.read)
        .put(tableStatus.update)
        .delete(tableStatus.delete);

module.exports = router;
