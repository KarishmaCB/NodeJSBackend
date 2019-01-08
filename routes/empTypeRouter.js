var express = require('express');
var router = express.Router();

const empType = require('../controllers/empTypeController');

router.route('/empType')
        .get(empType.list)
        .post(empType.create);
router.route('/empType/:_id')
        .get(empType.read)
        .put(empType.update)
        .delete(empType.delete);

module.exports = router;
