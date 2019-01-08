var express = require('express');
var router = express.Router();

const booking = require('../controllers/bookingController');

router.route('/booking')
        .get(booking.list)
        .post(booking.create);
router.route('/booking/:_id')
        .get(booking.read)
        .put(booking.update)
        .delete(booking.delete);

module.exports = router;
