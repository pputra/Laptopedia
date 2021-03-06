const router = require('express').Router();
const userController = require('../controllers/userController');
const orderRoutes = require('./orderRoutes');
const paymentRoutes = require('./paymentRoutes');


router.use('/order', orderRoutes);
router.use('/payment', paymentRoutes);
router.get('/logout', userController.logout);

module.exports = router;