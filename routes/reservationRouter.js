var express = require('express');
var router = express.Router();

const reservation = require('../controllers/reservationController');

router.route('/reservation')
        .get(reservation.list)
        .post(reservation.create);
router.route('/reservation/:_id')
        .get(reservation.read)
        .put(reservation.update)
        .delete(reservation.delete);

module.exports = router;
