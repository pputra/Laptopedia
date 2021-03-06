const router = require('express').Router();
const OrderController = require('../controllers/orderController');

router.get('/', OrderController.showAllOrder);
router.post('/', OrderController.addOrder);

router.get('/history', OrderController.showHistory);
router.post('/delete', OrderController.delete);

module.exports = router;