var express = require('express');
var router = express.Router();

const menu = require('../controllers/menuController');

router.route('/menu')
        .get(menu.list)
        .post(menu.create);
router.route('/menu/:_id')
        .get(menu.read)
        .put(menu.update)
        .delete(menu.delete);

module.exports = router;
