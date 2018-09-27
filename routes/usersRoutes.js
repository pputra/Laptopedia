const router = require('express').Router();
const userController = require('../controllers/userController');
const orderRoutes = require('./orderRoutes');


router.use('/order', orderRoutes);


module.exports = router;