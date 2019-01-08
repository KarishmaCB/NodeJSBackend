var express = require('express');
var router = express.Router();

const employee = require('../controllers/employeeController');

router.route('/employee')
        .get(employee.list)
        .post(employee.create);
router.route('/employee/:_id')
        .get(employee.read)
        .put(employee.update)
        .delete(employee.delete);

module.exports = router;
