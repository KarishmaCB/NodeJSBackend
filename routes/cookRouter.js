var express = require('express');
var router = express.Router();

const cook = require('../controllers/cookController');

router.route('/cook')
        .get(cook.list)
        .post(cook.create);
router.route('/cook/:_id')
        .get(cook.read)
        .put(cook.update)
        .delete(cook.delete);

module.exports = router;
