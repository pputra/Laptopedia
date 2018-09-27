const router = require('express').Router();
const PaymentController = require('../controllers/paymentController');

router.get('/', PaymentController.showPaymentMenu);

module.exports = router;