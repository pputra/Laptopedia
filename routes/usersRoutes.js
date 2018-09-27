const router = require('express').Router();
const userController = require('../controllers/userController');


router.get('/register', userController.showRegisterPage);

router.post('/register', userController.registerUser);

router.get('/login', userController.showLoginPage);

router.post('/login', userController.login);

module.exports = router;