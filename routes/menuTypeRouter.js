var express = require('express');
var router = express.Router();

const menuType = require('../controllers/menuTypeController');

router.route('/menuType')
        .get(menuType.list)
        .post(menuType.create);
router.route('/menuType/:_id')
        .get(menuType.read)
        .put(menuType.update)
        .delete(menuType.delete);

module.exports = router;
