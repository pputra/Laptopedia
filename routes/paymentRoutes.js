const router = require('express').Router();
const PaymentController = require('../controllers/paymentController');

router.get('/shipping', PaymentController.showShippingMenu);

router.post('/shipping/options', PaymentController.showCourierMenu);

router.post('/pay', PaymentController.pay);


module.exports = router;