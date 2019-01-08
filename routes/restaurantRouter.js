var express = require('express');
var router = express.Router();

const restaurant = require('../controllers/restaurantController');

router.route('/restaurant')
        .get(restaurant.list)
        .post(restaurant.create);
router.route('/restaurant/:_id')
        .get(restaurant.read)
        .put(restaurant.update)
        .delete(restaurant.delete);

module.exports = router;
